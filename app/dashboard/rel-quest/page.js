'use client';
import React, { useState } from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBell, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/style.css';

export default function CreateRelease() {
  const [releaseType, setReleaseType] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState('');

  const handleReleaseTypeChange = (e) => {
    const value = e.target.value;
    if (value === 'Remixes') {
      setPopupType('remixes');
      setShowPopup(true);
    } else {
      setReleaseType(value);
      setShowOtherInput(value === 'Others');
    }
  };

  const handlePopupResponse = (agreed) => {
    if (agreed) {
      setReleaseType('Remixes');
    }
    setShowPopup(false);
  };

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
        <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white w-full mt-52">
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

        {/* Main Body */}
        <div className="w-full max-w-3xl justify-between p-8">
          {/* Greetings Box */}
          <div className="bg-[#1A1A1A] text-white p-6 rounded-lg flex justify-between items-center mb-4 relative overflow-visible mt-20">
            <div>
              <h1 className="text-2xl font-bold">Hello User!</h1>
              <p className="mt-2 opacity-75">Launch your release today with Young CEO Entertainment!</p>
            </div>
            <Image
              src="/images/welc.svg"
              alt="Illustration"
              width={150}
              height={150}
              className="object-contain absolute right-8 bottom-10 translate-y-10"
            />
          </div>

          {/* Essential Details text */}
          <h3 className="text-white text-2xl text-center mb-6">Essential Details for Your Next Big Release</h3>

          {/* Key Details container box */}
          <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-lg flex items-start relative">
            {/* Background Image */}
            <Image
              src="/images/C1.png"
              alt="Key Details Illustration"
              objectFit="cover"
              className="absolute opacity-70 left-0 top-12"
              width={390}
              height={250}
            />

            <div className="w-1/2 relative z-10 ml-auto mr-8">
              {/* Text */}
              <p className="text-white text-xl text-left mb-4">Key Details of Your Release</p>

              {/* Progress Bar */}
              <div className="bg-gray-700 rounded-full h-2 mb-8 ml-auto">
                <div className="bg-white h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="text-white block mb-2">Write Your Song Title Here!<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                    placeholder="Song Title"
                    required
                  />
                </div>

                <div>
                  <label className="text-white block mb-2">Version (Optional)</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                    placeholder=" "
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Specify how this release differs from the original (e.g., Remix, Radio Edit, Bonus Track)
                  </p>
                </div>

                <div>
                  <label className="text-white block mb-2">Language of the Titles<span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className="w-full p-3 rounded bg-[#CDCDCD] text-black appearance-none pr-10" required>
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Marathi</option>
                    </select>
                    <FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none text-black" />
                  </div>
                </div>

                <div>
                  <label className="text-white block mb-2">Release Type of Your Music<span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select
                      className="w-full p-3 rounded bg-[#CDCDCD] text-black appearance-none pr-10"
                      onChange={handleReleaseTypeChange}
                      required
                    >
                      <option>Single</option>
                      <option>Album</option>
                      <option>EP</option>
                      <option>Compilation</option>
                      <option>Remixes</option>
                      <option>Others</option>
                    </select>
                    <FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none text-black" />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Choose your release type: Album, Single, EP, or Compilation
                  </p>
                </div>

                {showOtherInput && (
                  <div>
                    <label className="text-white block mb-2">Other Release Type</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                      placeholder="Specify Release Type"
                    />
                  </div>
                )}
              </div>

              {/* Submit and Cancel Buttons */}
              <div className="mt-6 flex justify-center items-center">
                <Link href='/dashboard'>
                  <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
                </Link>
                <Link href='/dashboard/rel-quest1'>
                  <button className="bg-white text-black py-2 px-4 rounded">Next</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <p className="text-lg mb-4">You need to submit the Permission for remixes for seamless distribution.</p>
            <div className="flex justify-center space-x-4">
              <button
                className="border border-[#A6A6A6] text-black py-2 px-4 rounded"
                onClick={() => handlePopupResponse(true)}
              >
                Agree
              </button>
              <button
                className="border border-[#A6A6A6] text-black py-2 px-4 rounded"
                onClick={() => handlePopupResponse(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
