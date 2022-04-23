import React, {useState} from 'react';
import Link from 'next/link';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export default function login() {

  const { loginWithRedirect } = useAuth0();

  return (
    <div className="grid h-[88vh] place-items-center">
      <div className="bg inline-block rounded-3xl bg-white p-7">
        <h1 className="mb-7 text-center text-2xl">Login to your account</h1>
          <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    </div>
  );
}
