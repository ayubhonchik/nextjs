'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push('/home');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className=" m-15 p-5 max-w-md mx-auto bg-yellow rounded shadow bg-blue-500">
      <h2 className="text-xl text-white font-bold mb-7 rounded">Log IN</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded  p-4 w-full mb-10 text-white"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded p-4 w-full mb-10 text-white"
      />
      <button
        onClick={handleLogin}
        className="text-white px-4 py-2 rounded w-full bg-blue-700"
      >
        Login
      </button>
      <button className='text-xl text-white' onClick={() => router.push("/")}>go home</button>
      <br />
      <button className='text-xl text-white' onClick={() => router.back()}>go back</button>
    </div>
  );
}
