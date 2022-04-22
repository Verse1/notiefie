import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

export default function login() {

  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="grid h-[88vh] place-items-center">
      <div className="bg inline-block rounded-3xl bg-white p-7">
        <h1 className="mb-7 text-center text-2xl">Login to your account</h1>
        {user ? <a href="/api/auth/logout">Logout</a> : <Link href="/api/auth/login">Login</Link>}
      </div>
    </div>
  );
}
