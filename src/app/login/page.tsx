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
    <div className=" m-15 p-5 max-w-md mx-auto bg-yellow rounded shadow">
      <h2 className="text-xl font-bold mb-4">Log IN</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-7 w-full mb-10 bg-orange-400"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-7 w-full mb-10 bg-orange-400"
      />
      <button
        onClick={handleLogin}
        className="text-green px-4 py-2 rounded w-full bg-orange-400"
      >
        Login
      </button>
    </div>
  );
}
