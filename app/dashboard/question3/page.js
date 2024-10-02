'use client';
import React, { useState } from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';
import '@/app/style.css'
import Link from 'next/link';

export default function Dashboard() {
  const [spotifyStatus, setSpotifyStatus] = useState(null);
  const [spotifyLink, setSpotifyLink] = useState('');

  return (
    <div className="flex h-screen bg-black font-poppins overflow-auto">
                               {/* Sidebar */}
<div className="sidebar bg-white h-[960px] w-[330px] text-black flex flex-col justify-between p-4 rounded-r-3xl">
  <div>
    {/* Profile Section */}
    <div className="bg-black bg-opacity-77 rounded-lg p-4 mb-4">
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
          <Link href="/dashboard/question1">
            <p className="text-xs mt-2 py-1 text-center border border-white rounded-lg text-white leading-none" style={{ fontSize: '10px' }}>
              Complete your profile
            </p>
          </Link>
        </div>
      </div>
    </div>

    {/* Logo */}
    <div className="logo mb-0 flex justify-center"> 
      <Image src="/images/blacklogo.png" alt="Young CEO Entertainment" height={180} width={180} />
    </div>

    {/* Menu */}
    <nav className="mt-0">
      <ul className="space-y-2 text-left">
      
        <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
          <FaMusic className="text-xl ml-5" /> <Link href="/dashboard"> <span className="text-xl ml-2"> Music </span> </Link>
        </li>
        <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
          <FaUsers className="text-xl ml-5" /> <Link href="/dashboard/audience"> <span className="text-xl ml-2"> Audience </span> </Link>
        </li>
        <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
          <FaTshirt className="text-xl ml-5" /> <Link href=" "> <span className="text-xl ml-2">Merch</span> </Link>
        </li>
        <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
          <FaVideo className="text-xl ml-5" /> <Link href=" "><span className="text-xl ml-2"> Video & Visuals </span> </Link> 
        </li>
        
        <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
          <FaCog className="text-xl ml-5" /> <Link href="/dashboard/settings"> <span className="text-xl ml-2"> Settings </span> </Link>
        </li>
      </ul>
    </nav>

    {/* Logout */}
    <div className="mt-7">
      <Link href="/login">
      <button className="bg-black w-full py-3 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-all">
        <FaSignOutAlt className="mr-2" /> Logout
      </button>
      </Link>
    </div>
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
            <Image src="/images/amico.svg" alt="Illustration" height={300} width={300} />
          </div>

          {/* Dropdown and Conditional Textbox */}
          <div className="mt-4">
            <p className="text-center mb-2 font-bold text-xl">Do you have previous works</p>
            <p className="text-center mb-4 font-bold text-xl">on Spotify?</p>
            <select
              className="bg-transparent border border-white text-white w-full p-2 rounded-lg"
              value={spotifyStatus}
              onChange={(e) => setSpotifyStatus(e.target.value)}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes, I am already on Spotify</option>
              <option value="no">No, I don&apos;t have a Spotify account</option>
            </select>

            {spotifyStatus === 'yes' && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Provide link to your Spotify handle"
                  className="bg-transparent border border-white text-white w-full p-2 rounded-lg"
                  value={spotifyLink}
                  onChange={(e) => setSpotifyLink(e.target.value)}
                />
              </div>
            )}
          </div>
          <Link href='/dashboard/question4'>
          <button className="bg-white text-black w-full py-2 mt-6 rounded-lg font-semibold">
            Next
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
