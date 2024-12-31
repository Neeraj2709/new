import React from "react";

const EmailVerifiedMessage = ({ onSwitchForm }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-6">
          <div className="flex flex-col items-center">
            <div className="text-blue-600 text-2xl font-bold mb-6">Verify Email</div>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="font-semibold text-black">Your details</span>
                <p className="text-gray-500">Please provide your details information.</p>
              </li>
              <li className="font-bold text-black">
                <span className="font-semibold text-black">Check your inbox</span>
                <p className="text-gray-500">Verify codes delivered to your inbox.</p>
              </li>
              <li>
                <span className="font-semibold text-black">Your address</span>
                <p className="text-gray-500">Please provide your current address.</p>
              </li>
              <li>
                <span className="font-semibold text-black">Choose a password</span>
                <p className="text-gray-500">Choose a secure password.</p>
              </li>
              <li>
                <span className="font-semibold text-black">Successfully</span>
                <p className="text-gray-500">Go back to log in to your account.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-2/3 p-10">
          <h1 className="text-2xl font-semibold text-gray-800">Your email has been verified</h1>
          <p className="text-gray-500 mt-2">Click the button below to proceed to your address page.</p>
          <button
            onClick={() => onSwitchForm("address")}
            className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-700 transition"
          >
            Go to Your Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifiedMessage;