import React, { useState } from 'react';
import {useAuth} from "../configurations/AuthContext.tsx";

const ConfirmationForm = (username:string) => {
    const [code, setCode] = useState('');
    const { confirmSignUp, loading, error } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await confirmSignUp(username, code);
    };

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
            </form>
        </div>
    );
};

export default ConfirmationForm;
