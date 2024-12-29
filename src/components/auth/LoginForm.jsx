import React, { useState } from 'react';

const LoginForm = ({ onSwitchForm }) => {
  const [emailError, setEmailError] = useState('');

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    if (email !== 'correct@example.com') {
      setEmailError('Looks like these are not your correct email. Please try again.');
    } else {
      setEmailError('');
    }
  };

  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onBlur={handleEmailBlur}
          required
        />
        {emailError && (
          <p className="mt-2 text-sm text-red-600">{emailError}</p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <button type="button" onClick={() => onSwitchForm('reset')} className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </button>
        </div>
      </div>
      <div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">Sign In</button>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button type="button" className="flex items-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100">
          <img src="/googlelogo.png" alt="Google logo" className="h-5 w-5 mr-2" />
          Sign in with Google
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?
          <button type="button" onClick={() => onSwitchForm('signup')} className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
            Sign Up
          </button>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;