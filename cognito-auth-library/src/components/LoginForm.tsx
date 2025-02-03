import React, {useState} from 'react';
import {useAuth} from "../configurations/AuthContext.tsx";
import {CurrentViewOptions} from "../configurations/types.ts";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error, setCurrentView } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">Sign In</h2>

            {error && <div className="text-red-600 text-center">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
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

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border rounded-md"
                        disabled={loading}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    disabled={loading}
                >
                    {loading ? 'Signing In...' : 'Sign In'}
                </button>
            </form>

            <div className="text-center space-y-2">
                <button
                    onClick={() => setCurrentView(CurrentViewOptions.SIGNUP)}
                    className="text-blue-600 hover:text-blue-500 text-sm"
                >
                    Create New Account
                </button>
                <br />
                <button
                    onClick={() => setCurrentView(CurrentViewOptions.FORGOT_PASSWORD)}
                    className="text-blue-600 hover:text-blue-500 text-sm"
                >
                    Forgot Password?
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
