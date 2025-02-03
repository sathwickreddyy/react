import React, { useState } from 'react';
import {ConfirmSignUpResponseProps, useAuth} from "../configurations/CognitoAuthProviderContext.tsx";
import {CurrentViewOptions} from "../configurations/types.ts";

const ConfirmationForm = () => {
    const [code, setCode] = useState('');
    const { confirmSignUp, loading, error, setCurrentView, username, resendConfirmationCode } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response: ConfirmSignUpResponseProps= await confirmSignUp(username, code);
        if(response.success){
            setCurrentView(CurrentViewOptions.LOGIN);
        }
    };

    const handleResendCode = async () => {
        await resendConfirmationCode();
        alert("Verification code resent successfully");
    }

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">Confirm Account</h2>
            {error && <div className="text-red-600 text-center">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                        Verification Code
                    </label>
                    <input
                        type="text"
                        id="code"
                        value={code}
                        maxLength={6}
                        onChange={(e) => setCode(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                        disabled={loading}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    disabled={loading}
                >
                    {loading ? 'Confirming...' : 'Confirm Account'}
                </button>

                <div className="text-center">
                    <button
                        onClick={handleResendCode}
                        className="text-blue-600 hover:text-blue-800"
                        disabled={loading}
                    >
                        Resend confirmation code
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ConfirmationForm;
