import React, { useState } from "react";

const ResetPasswordForm = ({ onSwitchForm }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Reset password email:", email);
    // Mock API call or logic
    onSwitchForm("check-your-email", email); // Move to the "Check Your Email" step
  };

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
              <li className="font-bold text-black">
                <span className="font-semibold text-black">Check your email</span>
                <p className="text-gray-500">Verify codes delivered to your inbox.</p>
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
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 mt-2 border-gray-300 focus:ring-blue-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-700 transition"
            >
              Reset Password
            </button>
          </form>
          <p className="text-center mt-4 text-sm text-gray-500">
            Already have an account?{" "}
            <button onClick={() => onSwitchForm("login")} className="text-blue-600 hover:underline">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;