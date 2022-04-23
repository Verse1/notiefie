import React, {useState} from 'react';
import Link from 'next/link';
import { useUser, withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';

export default function login() {

  const { user, error, isLoading } = useUser();
  const [showResult, setShowResult] = useState(false);
  const [endpointMessage, setEndpointMessage] = useState('');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const callProtectedEndpoint = async () => {
    try { 
      const token = await getAccessToken();
      const res = await axios.get(`http://localhost:3001/api/protected`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      const data = await res.json();
      setShowResult(true);
      setEndpointMessage(data);
      console.log(data)
    } catch( error ) {
      console.log(error);
    }
  }

  return (
    <div className="grid h-[88vh] place-items-center">
      <div className="bg inline-block rounded-3xl bg-white p-7">
        <h1 className="mb-7 text-center text-2xl">Login to your account</h1>
        {user ? <a href="/api/auth/logout">Logout</a> : <Link onClick={callProtectedEndpoint} href="/api/auth/login">Login</Link>}
      </div>
    </div>
  );
}
