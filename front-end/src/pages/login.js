import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Login() {
  const { isAuthenticated, loginWithPopup, logout, loginWithRedirect } =
    useAuth0();
  console.log(isAuthenticated);
  return (
    <div className="grid h-[88vh] place-items-center">
      <div className="bg  rounded-3xl bg-white p-7">
        <h1 className="mb-7 text-center text-2xl">
          Login to your school email account
        </h1>
        <button
          className="mt-9 mb-4 cursor-pointer rounded-xl bg-gradient-to-r from-green-300 to-blue-400 p-3 px-9"
          onClick={loginWithRedirect}>
          Sign in
        </button>
        <button
          className="mt-9 mb-4 cursor-pointer rounded-xl bg-gradient-to-r from-green-300 to-blue-400 p-3 px-9"
          onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}