import React, { useState } from 'react';
import AuthHeader from '../components/auth/AuthHeader';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import ResetPasswordForm from '../components/auth/ResetPasswordForm';
import VerifyEmailForm from '../components/auth/VerifyEmailForm';
import EmailVerified from "../components/auth/EmailVerified";
const Authentication = () => {
  const [showForm, setShowForm] = useState('login');

  const switchForm = (formName) => {
    setShowForm(formName);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url('/pet2.jpg')` }}
    >
      <div className="w-full max-w-md space-y-8 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg mt-8 md:mt-6 lg:mt-4 xl:mt-0 xl:ml-72">
        {/* <img src="/logo.png" alt="Petcare Connect Logo" className="mx-auto h-16 w-16 mb-4" /> */}
        <AuthHeader />
        {showForm === 'login' && <LoginForm onSwitchForm={switchForm} />}
        {showForm === 'signup' && <SignupForm onSwitchForm={switchForm} />}
        {showForm === 'reset' && <ResetPasswordForm onSwitchForm={switchForm} />}
        {showForm === 'verify-email' && <VerifyEmailForm onSwitchForm={switchForm} />}
        {showForm === 'email-verified' && <EmailVerified onSwitchForm={switchForm} />}
      </div>
    </div>
  );
};

export default Authentication;