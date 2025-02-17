import {memo} from 'react';
import {useAuth} from "../configurations/CognitoAuthProviderContext.tsx";
import {ForgotPasswordForm, LoginForm, SignupForm} from "../index.tsx";
import {CurrentViewOptions} from "../configurations/types.ts";
import ConfirmationForm from "./ConfirmationForm.tsx";


const CognitoAuthenticationContainer = memo(() => {
    const { currentView } = useAuth();

    return (
        <div className="auth-container max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
            {currentView === CurrentViewOptions.LOGIN && <LoginForm />}
            {currentView === CurrentViewOptions.SIGNUP && <SignupForm />}
            {currentView === CurrentViewOptions.FORGOT_PASSWORD && <ForgotPasswordForm />}
            {currentView === CurrentViewOptions.CONFIRM_SIGNUP && <ConfirmationForm/>}
        </div>
    );
});

export default CognitoAuthenticationContainer;
