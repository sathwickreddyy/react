import {CognitoAuthConfig} from "../configurations/types.ts";

const awsConfig = (config: CognitoAuthConfig)  => {
    return {
        Auth: {
            Cognito: { // Wrap Cognito config under this key
                userPoolId: config.userPoolId,
                    userPoolClientId: config.userPoolClientId,
                    loginWith: {
                    // Optional: Add OAuth or other configurations here
                },
            },
            mandatorySignIn: true,
                region: config.region,
        },
    }
};

export default awsConfig;
