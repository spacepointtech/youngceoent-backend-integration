
'use client';
import React, { useState } from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';
import '@/app/style.css'
import Link from 'next/link';

export default function Dashboard() {
  const [selectedArtistType, setSelectedArtistType] = useState(null);

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

        {/* Form Section */}
        <div className="bg-black bg-opacity-40 backdrop-blur-lg text-white w-[50%] p-8 rounded-lg shadow-lg mt-12 z-10 relative">
          <h2 className="text-2xl font-semibold text-center mb-4">Complete your free account setup</h2>
          <p className="text-gray-400 text-center mb-6">
            Provide your basic profile information to complete your artist profile. This helps us create a more personalized experience for you.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="bg-transparent border text-white p-2 rounded-lg" />
            <input type="text" placeholder="Last Name" className="bg-transparent border text-white p-2 rounded-lg" />
          </div>
          <input type="email" placeholder="Your Email address" className="bg-transparent border text-white w-full p-2 mt-4 rounded-lg" />
          <input type="text" placeholder="Your Mobile No." className="bg-transparent border text-white w-full p-2 mt-4 rounded-lg" />

          {/* Artist Type Selection */}
          <div className="mt-4">
            <p className="mb-2 text-center">I am a:</p>
            <div className="border rounded-lg flex items-center justify-center p-2">
  <div
    className={`flex-1 flex items-center justify-center cursor-pointer p-4 ${selectedArtistType === 'independent' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
    onClick={() => setSelectedArtistType('independent')}
  >
    <input
      type="radio"
      name="artist_type"
      id="independent"
      className="mr-2 h-5 w-5 appearance-none border-2 border-white rounded-full checked:bg-black checked:border-white focus:outline-none"
      checked={selectedArtistType === 'independent'}
      onChange={() => setSelectedArtistType('independent')}
    />
    <label htmlFor="independent">Independent artist</label>
  </div>

  <div
    className={`flex-1 flex items-center justify-center cursor-pointer p-4 ${selectedArtistType === 'label' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
    onClick={() => setSelectedArtistType('label')}
  >
    <input
      type="radio"
      name="artist_type"
      id="label"
      className="mr-2 h-5 w-5 appearance-none border-2 border-white rounded-full checked:bg-black checked:border-white focus:outline-none"
      checked={selectedArtistType === 'label'}
      onChange={() => setSelectedArtistType('label')}
    />
    <label htmlFor="label">Signed to a Label</label>
  </div>
</div>

          </div>
          <Link href='/dashboard/question2'>
          <button className="bg-white text-black w-full py-2 mt-6 rounded-lg font-semibold">
            Next
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
