import React from "react";

const PasswordResetSuccess = ({ onSwitchForm }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Sidebar */}
        <aside className="w-1/3 bg-gray-100 p-6">
          <div className="flex flex-col items-center">
            <div className="text-blue-600 text-2xl font-bold mb-6">Reset Password</div>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="font-semibold text-black">Your details</span>
                <p className="text-gray-500">Please provide your details information.</p>
              </li>
              <li>
                <span className="font-semibold text-black">Check your email</span>
                <p className="text-gray-500">Verify codes delivered to your inbox.</p>
              </li>
              <li className="font-bold text-black">
                <span className="font-semibold text-black">Choose a password</span>
                <p className="text-gray-500">Choose a secure password.</p>
              </li>
              <li>
                <span className="font-semibold text-black">Successfully</span>
                <p className="text-gray-500">Go back to log in to your account.</p>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center flex-grow p-8">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-6">
            <header className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Password Reset Successfully</h1>
              <p className="text-sm text-gray-600">Your password has been successfully reset.</p>
              <p className="text-sm text-gray-600">Click below to login.</p>
            </header>
            <button
              onClick={() => onSwitchForm("login")}
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-700 transition"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;