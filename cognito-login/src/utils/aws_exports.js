import { Amplify } from 'aws-amplify';

export const configureAWS = (config) => {
    Amplify.configure({
        Auth: {
            region: config.region,
            userPoolId: config.userPoolId,
            userPoolWebClientId: config.userPoolWebClientId,
            mandatorySignIn: true,
        },
    });
};
