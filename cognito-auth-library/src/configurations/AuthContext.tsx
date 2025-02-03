import React, {createContext, useCallback, useContext, useState} from 'react';
import { CognitoAuthConfig, CurrentViewOptions} from './types';
import {confirmResetPassword, signIn} from '@aws-amplify/auth';
import {confirmUserSignUp, signUpUser} from "../services/cognitoService.ts";
import {Amplify} from "aws-amplify";
import awsconfig from "../hooks/aws-exports.ts";

export interface AuthContextType {
    user: unknown | null;
    loading: boolean;
    error: string | null;
    login: (username: string, password: string) => Promise<void>;
    signup: (username: string, name: string, password: string, email: string, gender: string, phoneNumber: string) => Promise<void>;
    forgotPassword: (username: string) => Promise<void>;
    resetPassword: (username: string, code: string, newPassword: string) => Promise<void>;
    confirmSignUp: (username: string, code: string) => Promise<void>;
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

    // Initialises configuration with Cognito
    Amplify.configure(awsconfig(config));

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
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }, [handleError]);

    const confirmSignUp = useCallback(async (username: string, code: string) => {
        setLoading(true);
        try {
            await confirmUserSignUp(username, code);
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }, [handleError]);

    const forgotPassword = useCallback(async (username: string) => {
        setLoading(true);
        try {
            await forgotPassword(username);
            setCurrentView(CurrentViewOptions.LOGIN);
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
            setCurrentView
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
