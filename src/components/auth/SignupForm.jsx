import React from 'react';

const SignupForm = ({ onSwitchForm }) => {
  return (
    <form className="space-y-6">
      {/* Add your signup form fields here */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?
          <button type="button" onClick={() => onSwitchForm('login')} className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
            Login
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
