'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [plan, setPlan] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Fetch the selected plan from local storage
    const storedPlan = localStorage.getItem('selectedPlan');
    if (storedPlan) {
      setPlan(storedPlan);
    }
  }, []);

  const handleLogout = () => {
    // Clear the selected plan and any other user data from local storage
    localStorage.removeItem('selectedPlan');
    // Redirect to the login page
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white font-poppins">
      {plan ? (
        <h1 className="text-3xl font-bold">
          Hello! Welcome to YCE - You're a {plan}
        </h1>
      ) : (
        <h1 className="text-3xl font-bold">
          Hello! Welcome to YCE - No subscription found
        </h1>
      )}
      <button
        onClick={handleLogout}
        className="mt-8 px-4 py-2 bg-red-600 rounded-lg text-white font-semibold hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
