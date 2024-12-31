import React from "react";

const CheckYourEmail = ({ email, onSwitchForm }) => {
  const handleResendEmail = () => {
    console.log("Resend email to:", email);
    // Mock API call or logic to resend the email
    alert(`Successfully sent link to: ${email}`);
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

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center flex-grow p-8">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-6">
            <header className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Check your email</h1>
              <p className="text-sm text-gray-600">We sent a password reset link to {email}.</p>
            </header>
            <button
              onClick={() => window.open('https://mail.google.com', '_blank')}
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-700 transition"
            >
              Open Email
            </button>
            <p className="text-center mt-4 text-sm text-gray-500">
              Didn't receive email?{" "}
              <button onClick={handleResendEmail} className="text-blue-600 hover:underline">
                Click to resend
              </button>
            </p>
            <p className="text-center mt-4 text-sm text-gray-500">
              <button onClick={() => onSwitchForm("set-new-password")} className="text-blue-600 hover:underline">
                Proceed to Set New Password
              </button>
            </p>
            <p className="text-center mt-4 text-sm text-gray-500">
              Already have an account?{" "}
              <button onClick={() => onSwitchForm("login")} className="text-blue-600 hover:underline">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckYourEmail;