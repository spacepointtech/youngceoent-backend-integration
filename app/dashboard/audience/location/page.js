'use client';
import React from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBell, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/style.css';


export default function AudienceOverview() {
  return (
    <div className="flex h-screen bg-black font-poppins overflow-auto">
      {/* Sidebar */}
      <div className="sidebar bg-white h-full w-80 text-black flex flex-col justify-between p-4 rounded-r-3xl">
        {/* Profile Section */}
        <div className="bg-black bg-opacity-77 rounded-lg p-4 mb-8">
          <div className="flex items-center">
            <Image src="/images/avtaar.png" height={50} width={50} alt="Profile" />
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
            <li className="p-2 rounded-r-lg flex justify-normal items-center">
              <FaMusic className="mr-3 justify-end" /> Music
            </li>
            <li className="p-2 rounded-r-lg flex justify-normal items-center">
              <FaUsers className="mr-3" /> Audience
            </li>
            <li className="p-2 rounded-r-lg flex justify-normal items-center">
              <FaTshirt className="mr-3" /> Merch
            </li>
            <li className="p-2 rounded-r-lg flex justify-normal items-center">
              <FaVideo className="mr-3" /> Video & Visuals
            </li>
            <li className="p-2 rounded-r-lg flex justify-normal items-center">
              <FaCog className="mr-3" /> Settings
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <div className="mb-4">
          <button className="bg-black w-full py-3 rounded-lg flex items-center justify-center text-white">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header */}
        <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white w-full mb-60 mt-60">
          <div className="relative">
            <FaBell className="text-gray-400 cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-2 h-2"></span>
          </div>
          <Link href="/profile">
            <Image
              src="/images/avtaar.png"
              className="w-10 h-10 rounded-full"
              height={20}
              width={20}
              alt="Profile"
            />
          </Link>
        </header>

        {/* Section Title */}
       

        {/* Section with Overview Links */}
        <section className="relative mb-8 w-[75%] mt-4">
        <div className="flex justify-start ml-3">
    <h1 className="text-4xl font-bold text-white mb-8">Audience</h1>
               </div>
          {/* Links: Overview, Segments, Location */}
          <div className="flex justify-start items-center mb-8 relative">
        
            <Link href="/dashboard/audience" className="text-white opacity-50 mx-4">
              Overview
            </Link>
            <Link href="/dashboard/segments" className="text-white opacity-50 mx-4">
              Segments
            </Link>
            <Link href="#" className="relative text-white font-bold mx-4 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-white after:w-[100%]">
              Location
            </Link>
            {/* Line extending beyond the Overview */}
            <div className="absolute left-[2%] right-0 bottom-[-2px] h-[2px] bg-white opacity-20"></div>
          </div>

          {/* Welcome to Analytics Box */}
          <div className="p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-lg shadow-lg relative">
            <h2 className="text-3xl font-bold mb-6 text-white">Welcome to your Analytics</h2>
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="text-gray-400">LISTENERS</p>
                <p className="text-4xl font-bold text-white opacity-80">112</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="text-gray-400">STREAMS</p>
                <p className="text-4xl font-bold text-white opacity-80">342</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="text-gray-400">STREAMS / LISTENERS</p>
                <p className="text-4xl font-bold text-white opacity-80">3.5</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="text-gray-400">SAVES</p>
                <p className="text-4xl font-bold text-white opacity-80">128</p>
              </div>
            </div>

            {/* Background Image */}
            {/* <div className="absolute top-0 right-0 bottom-12 w-40 h-40 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/audiencelayer.png')" }}></div> */}
          </div>
        </section>

       
        {/* Background Box with Image */}
<section className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg w-[75%] mb-8 relative min-h-[700px]"> 
  {/* Adjusted the size of the background image */}
  <div
    className="absolute inset-0 bg-contain bg-center rounded-lg"
    style={{ backgroundImage: "url('/images/globe.png')", backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}
  />
</section>

    
      </div>
    </div>
  );
}
