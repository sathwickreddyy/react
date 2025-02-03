import React, { useState } from 'react';
import {useAuth} from "../configurations/AuthContext.tsx";
import {CurrentViewOptions} from "../configurations/types.ts";

const ForgotPasswordForm = () => {
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [step, setStep] = useState(1);
    const { forgotPassword, resetPassword, loading, error, setCurrentView } = useAuth();

    const handleSendCode = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Sending verification code to update password")
        await forgotPassword(username);
        console.log("Verification code sent successfully");
        setStep(2);
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        await resetPassword(username, code, newPassword);
        console.log("Password reset successfully");
        setCurrentView(CurrentViewOptions.LOGIN);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">
                {step === 1 ? 'Reset Password' : 'Set New Password'}
            </h2>

            {error && <div className="text-red-600 text-center">{error}</div>}

            {step === 1 ? (
                <form onSubmit={handleSendCode} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border rounded-md"
                            disabled={loading}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                        disabled={loading}
                    >
                        {loading ? 'Sending Code...' : 'Send Reset Code'}
                    </button>
                </form>
            ) : (
                <form onSubmit={handleResetPassword} className="space-y-4">
                    <div>
                        <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                            Verification Code
                        </label>
                        <input
                            type="text"
                            id="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border rounded-md"
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border rounded-md"
                            disabled={loading}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                        disabled={loading}
                        onClick={handleResetPassword}
                    >
                        {loading ? 'Resetting Password...' : 'Reset Password'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ForgotPasswordForm;
