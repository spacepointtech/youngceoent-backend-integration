import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Dashboard({ user }) {
  const router = useRouter();

  const handleLogout = async () => {
    await axios.get('http://localhost:5000/auth/logout', { withCredentials: true });
    router.push('/login');
  };

  return (
    <div className="dashboard">
      <h1>Hello, {user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get('http://localhost:5000/auth/user', { headers: context.req.headers });
  return { props: { user: res.data.user } };
}
