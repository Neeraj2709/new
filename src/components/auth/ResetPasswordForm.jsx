import React, { useState } from 'react';

const ResetPasswordForm = ({ onSwitchForm }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your email validation logic here
    if (email === '') {
      setEmailError('Email is required');
    } else {
      setEmailError('');
      // Proceed with password reset logic
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar with steps */}
      <aside className="hidden md:flex flex-col w-1/3 bg-white p-8 shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Your details</h2>
        <ul className="space-y-4 text-sm text-gray-600">
          <li>
            <span className="font-bold text-blue-500">1. </span> Check your email
          </li>
          <li>
            <span className="font-bold text-gray-400">2. </span> Choose a password
          </li>
          <li>
            <span className="font-bold text-gray-400">3. </span> Successfully reset
          </li>
        </ul>
      </aside>

      {/* Main form */}
      <div className="flex flex-col justify-center items-center flex-grow p-8">
        <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-6" onSubmit={handleSubmit}>
          <header className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot password?</h1>
            <p className="text-sm text-gray-600">No worries, we’ll send you reset instructions.</p>
          </header>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
            {emailError && <p className="mt-2 text-sm text-red-600">{emailError}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Reset password
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => onSwitchForm('login')}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Back to log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
