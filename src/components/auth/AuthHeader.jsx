import React from 'react';

const AuthHeader = () => {
  return (
    <header className="py-4 pl-0 pr-4 flex flex-col items-start">
      <h1 className="text-3xl font-bold text-black mb-2 whitespace-nowrap">Welcome to PetCare Connect</h1>
      <p className="mt-2 pl-24 text-sm text-black whitespace-nowrap">Please log in or sign up to continue</p>
    </header>
  );
};

export default AuthHeader;
