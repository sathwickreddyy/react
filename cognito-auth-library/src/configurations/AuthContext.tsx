import React, {createContext, useCallback, useContext, useState} from 'react';
import { CognitoAuthConfig, CurrentViewOptions} from './types';
import {resetPassword as amplifyForgotPassword, confirmResetPassword, resendSignUpCode, signIn} from '@aws-amplify/auth';
import {confirmUserSignUp, signUpUser} from "../services/cognitoService.ts";
import {Amplify} from "aws-amplify";
import awsConfig from "../hooks/aws-exports.ts";


export interface ConfirmSignUpResponseProps {
    success: boolean,
    userId?: string,
    nextStep?: any
}

export interface AuthContextType {
    user: unknown | null;
    username: string;
    setUsername: (username: string) => void;
    resendConfirmationCode:  () => Promise<void>;
    loading: boolean;
    error: string | null;
    login: (username: string, password: string) => Promise<void>;
    signup: (username: string, name: string, password: string, email: string, gender: string, phoneNumber: string) => Promise<boolean>;
    forgotPassword: (username: string) => Promise<void>;
    resetPassword: (username: string, code: string, newPassword: string) => Promise<void>;
    confirmSignUp: (username: string, code: string) => Promise<ConfirmSignUpResponseProps>;
    currentView: CurrentViewOptions;
    setCurrentView: (view: CurrentViewOptions) => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Provides an authentication context for the given children.
 *
 * @example
 * <CognitoAuthProvider config={config}>
 *     <App />
 * </CognitoAuthProvider>
 *
 * @param {CognitoAuthConfig} config - The configuration for the
 *     Cognito User Pool.
 * @param {React.ReactNode} children - The React components to be
 *     rendered within the context.
 * @param {CurrentViewOptions} [initialView=CurrentViewOptions.LOGIN] -
 *     The initial view to be displayed.
 *
 * @returns {React.ReactElement}
 */
export const CognitoAuthProvider: React.FC<{
    config: CognitoAuthConfig;
    children: React.ReactNode;
    initialView?: CurrentViewOptions;
}> = ({ config, children, initialView = CurrentViewOptions.LOGIN }) => {
    const [user, setUser] = useState<unknown | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentView, setCurrentView] = useState<CurrentViewOptions>(initialView);
    const [username, setUsername] = useState<string>('');

    // Initialises configuration with Cognito
    Amplify.configure(awsConfig(config));

    const handleError = useCallback((error: unknown) => {
        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        setError(message);
        setTimeout(() => setError(null), 5000);
    }, []);

    const login = useCallback(async (username: string, password: string) => {
        setLoading(true);
        try {
            const result = await signIn({ username, password });
            setUser(result);
            console.log("User logged in successfully", result);
            alert("Login successful");
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }, [handleError]);

    const signup = useCallback(async (username: string, name:string, password: string, email: string, gender:string, phoneNumber:string) => {
        setLoading(true);
        try {
            await signUpUser(username, name, password, email, gender, phoneNumber);
            setCurrentView(CurrentViewOptions.LOGIN);
            return true;
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
        return false;
    }, [handleError]);

    const confirmSignUp = useCallback(async (username: string, code: string) => {
        setLoading(true);
        let response: ConfirmSignUpResponseProps = {success: false};
        try {
            response = await confirmUserSignUp(username, code);
            if(response.success){
                alert("Account verification successful, please login....")
            }
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
        return response;
    }, [handleError]);

    const resendConfirmationCode = useCallback(async () => {
        setLoading(true);
        console.log("Re-Sending verification code for user {} ...", username);
        try {
            await resendSignUpCode({ username });
            // Optionally set a success message
            console.log("Verification code resent successfully");
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }, [username, handleError]);

    const forgotPassword = useCallback(async (username: string) => {
        setLoading(true);
        try {
            console.log("Forgot password for user {} ...", username);
            await amplifyForgotPassword({username});
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }, [handleError]);

    const resetPassword = useCallback(async (username: string, code: string, newPassword: string) => {
        setLoading(true);
        try {
            await confirmResetPassword({
                username,
                confirmationCode: code,
                newPassword
            });
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }, [handleError]);

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            error,
            login,
            signup,
            forgotPassword,
            resetPassword,
            confirmSignUp,
            currentView,
            setCurrentView,
            username,
            setUsername,
            resendConfirmationCode
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
