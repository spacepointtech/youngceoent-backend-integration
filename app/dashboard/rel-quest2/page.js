'use client';
import React, { useState } from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBell, FaChevronDown, FaPlus, FaMinus, FaArrowLeft, FaAngleLeft, FaUpload, FaCloudUploadAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/style.css';

export default function CreateRelease() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [license, setLicense] = useState('');
  const [showIndependentTooltip, setShowIndependentTooltip] = useState(false);
  const [showCreativeTooltip, setShowCreativeTooltip] = useState(false);
  const [ccType, setCcType] = useState(''); // New state for CC dropdown

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  
  const handleLicenseChange = (e) => {
    setLicense(e.target.value);
    if (e.target.value !== 'Creative Commons') {
      setCcType(''); // Reset CC type if not Creative Commons
    }
  };

  return (
    <div className="flex h-screen bg-black font-poppins overflow-auto">
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
              <li className="p-2 rounded-r-lg flex justify-center items-center">
                <FaMusic className="mr-3 justify-cennter" /> Music
              </li>
              <li className="p-2 rounded-r-lg flex justify-center items-center">
                <FaUsers className="mr-3 justify-center" /> Audience
              </li>
              <li className="p-2 rounded-r-lg flex justify-center  items-center">
                <FaTshirt className="mr-3" /> Merch
              </li>
              <li className="p-2 rounded-r-lg flex justify-center  items-center">
                <FaVideo className="mr-3" /> Video & Visuals
              </li>
              <li className="p-2 rounded-r-lg flex justify-center  items-center">
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
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header */}
        <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white w-full mt-10">
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
        <div className="w-full max-w-3xl p-8">
            {/* Greetings Box */}
          <div className="bg-[#1A1A1A] text-white p-6 rounded-lg flex justify-between items-center mb-4 relative overflow-visible">
            <div>
          
              <p className="mt-2 opacity-75">--- Song Details Box --- </p>
            </div>
           
          </div>
          {/* Essential Details text */}
          <h3 className="text-white text-2xl text-center mb-6">Essential Details for Your Next Big Release</h3>
 
          {/* Key Details container box */}
          <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-lg relative">
            {/* Back Button */}
            <FaAngleLeft
              className="absolute top-4 left-4 cursor-pointer text-white"
              onClick={() => window.history.back()}
            />
            <p className="text-white text-xl text-center mb-4 mt-2">Providing License Details</p>
            {/* Progress Bar */}
            <div className=" bg-gray-700 rounded-full h-2 mb-8 ml-auto">
              <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>

            <div className="relative z-10 w-full">
                        {/* Form Fields */}
        <div className="space-y-4">
          {/* Digital Release Date and Time */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="text-white block mb-2">Digital Release Date<span className="text-red-500">*</span></label>
              <input
                type="date"
                className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                onChange={handleDateChange}
                required
              />
            </div>
            <div className="w-1/2 relative">
              <label className="text-white block mb-2">Release Time<span className="text-red-500">*</span></label>
              <input
                type="time"
                className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                onChange={handleTimeChange}
                required
              />
             
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            Set your digital release date. We recommend at least 7 days in advance to account for processing time.
          </p>
          {selectedDate && selectedTime && (
            <p className="text-white mt-2">
              Release Date: {selectedDate}, Time: {selectedTime}
            </p>
          )}
                 {/* License Type */}
                 <div className="mt-4">
                  <p className="text-white block mb-2">Select the License Type<span className="text-red-500">*</span></p>
                  <div className="border rounded-lg flex items-center justify-center p-2">
                    <div
                      className={`flex-1 flex items-center justify-center cursor-pointer p-4 ${license === 'Copyright' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
                      onMouseEnter={() => setShowIndependentTooltip(true)}
                      onMouseLeave={() => setShowIndependentTooltip(false)}
                    >
                      <input
                        type="radio"
                        value="Copyright"
                        className="mr-2 h-5 w-5 appearance-none border-2 border-white rounded-full checked:bg-black checked:border-white focus:outline-none"
                        checked={license === 'Copyright'}
                        onChange={handleLicenseChange}
                      />
                      <label htmlFor="independent">Copyright</label>
                      {showIndependentTooltip && !license && (
                        <div className="absolute left-0 mt-28 bg-gray-700 text-white text-xs p-2 rounded-md z-10">
                          Copyright (or author's right) is a legal term used to describe the rights that creators have over their literary and artistic works. Works covered by copyright range from books, music, paintings, sculpture, and films, to computer programs, databases, advertisements, maps, and technical drawings.
                        </div>
                      )}
                    </div>
                    
                    <div
                      className={`flex-1 flex items-center justify-center cursor-pointer p-4 ${license === 'Creative Commons' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
                      onMouseEnter={() => setShowCreativeTooltip(true)}
                      onMouseLeave={() => setShowCreativeTooltip(false)}
                    >
                      <input
                        type="radio"
                        value="Creative Commons"
                        className="mr-2 h-5 w-5 appearance-none border-2 border-white rounded-full checked:bg-black checked:border-white focus:outline-none"
                        onChange={handleLicenseChange}
                        checked={license === 'Creative Commons'} 
                      />
                      <label htmlFor="label">Creative Commons</label>
                      {showCreativeTooltip && !license && (
                        <div className="absolute right-0 mt-28 bg-gray-700 text-white text-xs p-2 rounded-md z-10">
                          A Creative Commons license is a standard way for a copyright holder to grant others permission to use their work under certain conditions.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs">
                    Select the applicable license: Copyright or Creative Commons (choose the CC type)
                  </p>

                  {/* Creative Commons Type Dropdown */}
                  {license === 'Creative Commons' && (
                    <div className="mt-4">
                      <label className="text-white block mb-2">Select Creative Commons Type</label>
                      <select
                        className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                        value={ccType}
                        onChange={(e) => setCcType(e.target.value)}
                      >
                        <option value="">Choose CC Type</option>
                        <option value="Attribution">Attribution (CC BY)</option>
                        <option value="Attribution-ShareAlike">Attribution-ShareAlike (CC BY-SA)</option>
                        <option value="Attribution-NoDerivs">Attribution-NoDerivs (CC BY-ND)</option>
                        <option value="Attribution-NonCommercial">Attribution-NonCommercial (CC BY-NC)</option>
                        <option value="Attribution-NonCommercial-ShareAlike">Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)</option>
                        <option value="Attribution-NonCommercial-NoDerivs">Attribution-NonCommercial-NoDerivs (CC BY-NC-ND)</option>
                      </select>
                    </div>
                  )}
                </div>

            

          {/* Territories and Price Category */}
          <div className="flex space-x-4">
            <div className="w-1/2 relative">
              <label className="text-white block mb-2">Territories (Optional)</label>
              <select className="w-full p-3 rounded bg-[#CDCDCD] text-black appearance-none pr-10">
                <option>Entire World</option>
                <option>Africa</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>North America</option>
                <option>South America</option>
                <option>Oceania</option>
              </select>
              <FaChevronDown className="absolute top-3/4 right-4  transform -translate-y-1/2 text-black" />
            </div>
            <div className="w-1/2">
              <label className="text-white block mb-2">Price Category</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                placeholder="Enter Price Category"
              />
            </div>
          </div>
        </div>

                {/* Submit and Cancel Buttons */}
              <div className="mt-16 flex justify-center items-center">
                <Link href='/dashboard'>
                  <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
                </Link>

                <Link href='/dashboard/rel-quest3'>
                  <button className="bg-white text-black py-2 px-4 rounded">Next</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
