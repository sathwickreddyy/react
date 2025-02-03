import { signUp, signOut, confirmSignUp} from '@aws-amplify/auth';

/**
 * Signup User
 */
export const signUpUser  = async (username: string, name:string, password: string, email: string, gender: string, phone_number: string ) => {
    try {
        const { isSignUpComplete, userId } = await signUp({
            username,   // This could be an email if configured
            password,
            options: {
                userAttributes: {
                    name,
                    email, // Include email for verification
                    phone_number,
                    gender
                },
            },
        });

        // Confirmation code will be sent to the email/phone in `userAttributes`
        return { isSignUpComplete, userId };
    } catch (error) {
        console.error('Error signing up:', error);
        throw error;
    }
}


/**
 * Confirm user sign-up with verification code
 * @param username - The username of the user to confirm
 * @param confirmationCode - The verification code received via email/SMS
 * @param forceAliasCreation - Optional flag to force alias migration (default: false)
 */
export const confirmUserSignUp = async (
    username: string,
    confirmationCode: string,
    forceAliasCreation = false
) => {
    try {
        const { isSignUpComplete, userId, nextStep } = await confirmSignUp({
            username,
            confirmationCode,
            options: {
                forceAliasCreation
            }
        });

        // Handle next steps based on response
        if (isSignUpComplete) {
            console.log('User confirmed successfully');
            return { success: true, userId };
        }

        console.log('Next required step:', nextStep.signUpStep);
        return { success: false, nextStep };

    } catch (error) {
        console.error('Error confirming sign-up:', error);
        throw error;
    }
};

/**
 * Sign out the current user.
 */
export const signOutUser = async () => {
    try {
        await signOut({global:true});
    } catch (error) {
        console.error('Error signing out:', error);
        throw error;
    }
};