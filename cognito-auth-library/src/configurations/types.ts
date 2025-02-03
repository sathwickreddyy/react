export interface CognitoAuthConfig {
    userPoolId: string;
    userPoolClientId: string;
    region: string;
}

export enum CurrentViewOptions {
    LOGIN = 'login',
    SIGNUP = 'signup',
    FORGOT_PASSWORD = 'forgot-password',
    CONFIRM_SIGNUP = 'confirm-signup'
}

