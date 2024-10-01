'use client';
import React, { useState } from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';
import '@/app/style.css'
import Link from 'next/link';

export default function Dashboard() {
  const [distributedSong, setDistributedSong] = useState(null);

  return (
    <div className="flex h-screen bg-black font-poppins overflow-hidden">
             {/* Sidebar */}
      <div className="sidebar bg-white h-full w-80 text-black flex flex-col justify-between p-4 rounded-r-3xl">
        <div>
          {/* Profile Section */}
          <div className="bg-black bg-opacity-77 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <Image
                src="/images/avtaar.png"
                height={50}
                width={50}
                alt="Profile"
              />
              <div className="ml-4 w-full">
                <div className="flex justify-between items-center">
                  <div className="w-3/4 bg-gray-400 rounded-full h-1 mt-2">
                    <div className="bg-white h-1 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-xs text-gray-600 ml-2">20%</span>
                </div>
                <Link href="/login/dashboard/question1">
                  <p className="text-xs mt-2 py-1 text-center border border-white rounded-lg text-white leading-none" style={{ fontSize: '10px' }}>
                    Complete your profile
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="logo mb-4 flex justify-center">
            <Image src="/images/blacklogo.png" alt="Young CEO Entertainment" height={400} width={400} />
          </div>

          {/* Menu */}
          <nav className="mt-4">
            <ul className="space-y-4 text-center">
              <li className="p-2 rounded-r-lg flex items-center">
                <FaMusic className="mr-3" /> Music
              </li>
              <li className="p-2 rounded-r-lg flex items-center">
                <FaUsers className="mr-3" /> Audience
              </li>
              <li className="p-2 rounded-r-lg flex items-center">
                <FaTshirt className="mr-3" /> Merch
              </li>
              <li className="p-2 rounded-r-lg flex items-center">
                <FaVideo className="mr-3" /> Video & Visuals
              </li>
              <li className="p-2 rounded-r-lg flex items-center">
                <FaCog className="mr-3" /> Settings
              </li>
            </ul>
          </nav>
        </div>

        {/* Logout */}
        <div className="mb-4">
          <button className="bg-black w-full py-3 rounded-lg flex items-center justify-center text-white">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-full flex flex-col items-center justify-center relative">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/background.png')" }}></div>

        {/* New Content Section */}
        <div className="bg-black bg-opacity-40 backdrop-blur-lg text-white w-[50%] p-8 rounded-lg shadow-lg mt-12 z-10 relative">
          {/* Illustration */}
          <div className="flex justify-center mb-6">
            <Image src="/images/cuate.png" alt="Illustration" height={300} width={300} />
          </div>

          {/* Radio Buttons */}
          <div className="mt-4">
            <p className="text-center mb-4">Have you distributed a song before?</p>
            <div className="flex flex-col mt-4">
              <div
                className={`flex items-center p-4 ${distributedSong === 'yes' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
                onClick={() => setDistributedSong('yes')}
              >
                <input
                  type="radio"
                  name="distributed_song"
                  id="yes"
                  className="mr-2"
                  checked={distributedSong === 'yes'}
                  onChange={() => setDistributedSong('yes')}
                />
                <label htmlFor="yes">Yes, I have distributed a song before</label>
              </div>
              <div className="border-t border-white mt-2"></div>
              <div
                className={`flex items-center p-4 ${distributedSong === 'no' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
                onClick={() => setDistributedSong('no')}
              >
                <input
                  type="radio"
                  name="distributed_song"
                  id="no"
                  className="mr-2"
                  checked={distributedSong === 'no'}
                  onChange={() => setDistributedSong('no')}
                />
                <label htmlFor="no">No, I have not distributed a song before</label>
              </div>
            </div>
          </div>

          <button className="bg-white text-black w-full py-2 mt-6 rounded-lg font-semibold">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
