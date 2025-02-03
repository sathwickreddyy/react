# React Cognito Auth Library 🔐

[![npm version](https://img.shields.io/npm/v/react-cognito-auth.svg)](https://www.npmjs.com/package/react-cognito-auth)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A reusable authentication library for React applications using AWS Cognito, featuring:

- Login/Signup flows with email confirmation
- Password reset functionality
- JWT token management
- Pre-built UI components with Tailwind CSS
- TypeScript support

## Installation 📦

```bash
npm install react-cognito-auth @aws-amplify/auth amazon-cognito-identity-js
```


## Configuration ⚙️

1. **Set up Cognito User Pool** in AWS Console
2. Create `.env` in your root directory:

```dotenv
VITE_AWS_REGION=your_region
VITE_AWS_USER_POOL_ID=your_pool_id
VITE_AWS_USER_POOL_CLIENT_ID=your_client_id
```

3. For Authentication pages use `CognitoAuthProvider`

```tsx
<CognitoAuthProvider config={
    {
        region: import.meta.env.VITE_AWS_REGION,
        userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
        userPoolClientId: import.meta.env.VITE_AWS_USER_POOL_CLIENT_ID
    }
}>
    // CognitoAuthenticationContainer is a pre-built component with login, signup, forgot password and reset password wiring
    <CognitoAuthenticationContainer />
</CognitoAuthProvider>
```

OR

```tsx
// In your consumer app
<CognitoAuthProvider
config={{
  userPoolId: 'your-pool-id',
  userPoolClientId: 'your-client-id',
  region: 'us-east-1'
}}
>
<Router>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Router>
</CognitoAuthProvider>
```


## Components 🧩

### Login
```tsx
import { Login } from 'react-cognito-auth';
function LoginPage() {
return <Login onSuccess={(user) => console.log(user)} />;
}
```

| Prop        | Type       | Description                          |
|-------------|------------|--------------------------------------|
| onSuccess   | Function   | Callback after successful login      |
| style       | CSSObject  | Custom styling for the component     |

### Signup with Confirmation
```tsx
import { Signup } from 'react-cognito-auth';
function SignupPage() {
return (
<Signup
onSuccess={(user) => console.log(user)}
resendCooldown={60} // seconds
/>
);
}
```


## Password Reset Flow 🔄
```tsx
import { ForgotPassword } from 'react-cognito-auth';
function ForgotPasswordPage() {
return <ForgotPassword />;
}
```


## Publishing the Library 🚀

1. Build the library:
```bash
npm run build
```

2. Login to npm:
```bash
npm login
```

3. Publish the package:
```bash
npm publish --access public
```


## Building Locally 🛠️

Sample `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
build: {
lib: {
entry: 'src/index.ts',
name: 'ReactCognitoAuth',
fileName: (format) => react-cognito-auth.${format}.js
},
rollupOptions: {
external: ['react', 'react-dom'],
output: {
globals: {
react: 'React'
}
}
}
},
plugins: [react()]
});
```


## Peer Dependencies 💼
- React 18+
- @aws-amplify/auth ^6.x
- amazon-cognito-identity-js ^6.x

## Contributing 🤝
1. Fork the repository
2. Create feature branch
3. Submit PR with detailed description

## License 📄
MIT © [Your Name]

## Support & FAQ ❓

**Q: How to handle confirmation code resend?**
```
// Confirmation component automatically handles resend
// with 60-second cooldown (configurable via prop)
```


**Q: Getting "Invalid Cognito Configuration" error?**
- Verify `.env` variables match Cognito settings
- Ensure User Pool App Client doesn't have client secret

**Need help?** Open an issue on [GitHub](https://github.com/sathwickreddyy/react/tree/main/cognito-auth-library)

