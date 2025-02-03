import {CognitoAuthenticationContainer, CognitoAuthProvider} from "./index.tsx";


function App() {
    return (
        <CognitoAuthProvider config={
            {
                userPoolId: 'ap-southeast-2_xs0LDSDt5',
                userPoolClientId: '468ji6mlmq9ql85au360u50ii',
                region: 'ap-southeast-2',
            }
        }>
            <CognitoAuthenticationContainer />
        </CognitoAuthProvider>
    )
}

export default App
