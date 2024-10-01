
// 'use client';
// import React, { useState } from 'react';
// import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBell, FaChevronDown, FaChevronUp, FaUser, FaLock, FaFileAlt, FaQuestionCircle, FaExclamationTriangle, FaEdit } from 'react-icons/fa';
// import Image from 'next/image';
// import Link from 'next/link';
// import '@/app/style.css';

// export default function CreateRelease() {
//   const [openSection, setOpenSection] = useState('Settings'); // Set default to Settings

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   return (
//     <div className="flex h-screen bg-black font-poppins overflow-auto">
//       {/* Sidebar */}
//       <div className="sidebar bg-white h-[920px] w-[330px] text-black flex flex-col justify-between p-4 rounded-r-3xl">
//         <div>
//           {/* Profile Section */}
//           <div className="bg-black bg-opacity-77 rounded-lg p-4 mb-4">
//             <div className="flex items-center">
//               <Image
//                 src="/images/avtaar.png"
//                 height={50}
//                 width={50}
//                 alt="Profile"
//               />
//               <div className="ml-4 w-full">
//                 <div className="flex justify-between items-center">
//                   <div className="w-3/4 bg-gray-400 rounded-full h-1 mt-2">
//                     <div className="bg-white h-1 rounded-full" style={{ width: '20%' }}></div>
//                   </div>
//                   <span className="text-xs text-gray-600 ml-2">20%</span>
//                 </div>
//                 <Link href="/login/dashboard/question1">
//                   <p className="text-xs mt-2 py-1 text-center border border-white rounded-lg text-white leading-none" style={{ fontSize: '10px' }}>
//                     Complete your profile
//                   </p>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Logo */}
//           <div className="logo mb-0 flex justify-center"> {/* Reduced margin */}
//             <Image src="/images/blacklogo.png" alt="Young CEO Entertainment" height={180} width={180} />
//           </div>

//           {/* Menu */}
//           <nav className="mt-0"> {/* Reduced margin */}
//             <ul className="space-y-2 text-left">
//               <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
//                 <FaMusic className="mr-3" /> Music
//               </li>
//               <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
//                 <FaUsers className="mr-3" /> Audience
//               </li>
//               <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
//                 <FaTshirt className="mr-3" /> Merch
//               </li>
//               <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
//                 <FaVideo className="mr-3" /> Video & Visuals
//               </li>
//               <li className="menu-item p-3 rounded-lg flex items-center justify-start hover:bg-black hover:text-white transition-all">
//                 <FaCog className="mr-3" /> Settings
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Logout */}
//         <div className="mb-4">
//           <button className="bg-black w-full py-3 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-all">
//             <FaSignOutAlt className="mr-2" /> Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="w-full flex flex-col items-center justify-center">
//         {/* Header */}
//         <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white w-full mt-20 mb-4">
//           <div className="relative">
//             <FaBell className="text-gray-400 cursor-pointer" />
//             <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full w-2 h-2"></span>
//           </div>
//           <Link href="/profile">
//             <Image
//               src="/images/avtaar.png"
//               className="w-10 h-10 rounded-full"
//               height={20}
//               width={20}
//               alt="Profile"
//             />
//           </Link>
//         </header>

//         {/* Explore All Benefits Box */}
//         <div className="w-full max-w-3xl mb-8">
//           <div className="rounded-xl p-6 text-white bg-gradient-to-b from-gray-400 via-gray-400 to-black flex items-center h-full">
//             <div className="w-1/2 h-full flex items-center justify-center">
//               {/* <Image
//                 src="/images/settings.svg"
//                 alt="Settings Illustration"
//                 height={1700}
//                 width={1700}
//                 className="object-contain h-full"
//               /> */}
//               <Image
//               src="/images/settings.svg"
//               alt="Illustration"
//               width={320}
//               height={320}
//               className="object-contain absolute h-full translate-y-10"
//             />
//             </div>
//             <div className="w-1/2">
//               <h2 className="text-2xl font-bold mb-4">Enjoy all benefits</h2>
//               <p className="mb-6 text-justify">
//                 Get access to exclusive features and content available only to premium members. Elevate your experience with our premium offerings today!
//               </p>
//               <button className="bg-white text-black py-3 px-6 rounded-full w-[360px]">Get Premium</button>
//             </div>
//           </div>
//         </div>


//           {/* Settings Box */}

//           <div className="w-full max-w-3xl">
//   <div className="bg-gray-900 p-6 rounded-lg">
//     {[
//       { label: 'Account', icon: <FaUser /> },
//       { label: 'Notification', icon: <FaBell /> },
//       { label: 'Password & Security', icon: <FaLock /> },
//       { label: 'Plan', icon: <FaFileAlt /> },
//       { label: 'Privacy Policy', icon: <FaExclamationTriangle /> },
//       { label: 'FAQ', icon: <FaQuestionCircle /> }
//     ].map((section, idx) => (
//       <div key={idx} className="mb-4">
//         <button
//           className={`flex justify-between w-full text-white py-4 px-4 rounded-lg items-center ${openSection === section.label ? 'bg-black' : ''}`}
//           style={{
//             border: '1px solid #757575',
//             borderRadius: '12px'
//           }}
//           onClick={() => toggleSection(section.label)}
//         >
//           <div className="flex items-center justify-start">
//             <span className="mr-2">{section.icon}</span> {section.label}
//           </div>
//           {openSection === section.label ? <FaChevronUp /> : <FaChevronDown />}
//         </button>
        
//         {openSection === section.label && section.label === 'Account' && (
//           <div className="mt-4 px-4 text-gray-400">
//             {/* Personal Details Section */}
//             <div className="border border-[#333333] rounded-lg p-4 mb-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">Personal Details</h3>
//                 <button className="flex items-center text-white" style={{ border: '1px solid #333333' }}>
//                   Edit  <FaEdit className="ml-2" />
//                 </button>
//               </div>
              
//               {/* Name and Last Name */}
//               <div className="flex justify-between">
//                 <div className="w-1/2">
//                   <p className="mt-2">Name: John</p>
//                   <p className="mt-2">Email: johndoe@example.com</p>
//                 </div>
//                 <div className="w-1/2">
//                   <p className="mt-2">Last Name: Doe</p>
//                   <p className="mt-2">Phone: +1234567890</p>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media Section */}
//             <div className="border border-[#333333] rounded-lg p-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">Social Media</h3>
//                 <button className="flex items-center text-white" style={{ border: '1px solid #333333' }}>
//                    Edit <FaEdit className="ml-2" />
//                 </button>
//               </div>

//               {/* Spotify and Other Social Links */}
//               <div className="flex justify-between">
//                 <div className="w-1/2">
//                   <p className="mt-2">Spotify: @johnspotify</p>
//                   <p className="mt-2">Twitter: @johndoe</p>
//                 </div>
//                 <div className="w-1/2">
//                   <p className="mt-2">Instagram: @johndoe</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
        
//          {/* Notification Section */}
//          {openSection === section.label && section.label === 'Notification' && (
//                   <div className="mt-4 px-4 text-gray-400">
//                     <div className="border border-[#333333] rounded-lg p-4 mb-4">
//                       <div className="flex justify-between items-center">
//                         <h3 className="text-lg font-semibold">Notification Preferences</h3>
//                         <button className="flex items-center text-white" style={{ border: '1px solid #333333' }}>
//                           Edit  <FaEdit className="ml-2" />
//                         </button>
//                       </div>

                      
//                       {/* Notification Preferences */}
// <div className="mt-4">
//   <div className="flex items-center justify-between">
//     <p className="font-bold text-white">Playlist Updates:</p>
//     <p>Push, Email</p>
//   </div>

//   <div className="flex items-center justify-between mt-4">
//     <p className="font-bold text-white">Artist Updates:</p>
//     <p>Push</p>
//   </div>

//   <div className="flex items-center justify-between mt-4">
//     <p className="font-bold text-white">New Features:</p>
//     <p>Push, Email</p>
//   </div>

//   <div className="flex items-center justify-between mt-4">
//     <p className="font-bold text-white">Payment & Subscriptions:</p>
//     <p>Push, Email</p>
//   </div>

//   <div className="flex items-center justify-between mt-4">
//     <p className="font-bold text-white">Security:</p>
//     <p>Push, Email</p>
//   </div>
// </div>

//                     </div>
//                   </div>
//                 )}
                
//        {/* Other sections */}
//        {openSection === section.label && openSection !== 'Account' && openSection !== 'Notification' && (
//                   <div className="mt-4 px-4 text-gray-400">
//                     <p>{section.label} details...</p>
//                   </div>
//                 )}
//       </div>
//     ))}
//   </div>
// </div>

//       </div>
//     </div>
//   );
// }




'use client';
import React, { useState } from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBell, FaChevronDown, FaChevronUp, FaUser, FaLock, FaFileAlt, FaQuestionCircle, FaExclamationTriangle, FaEdit } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/style.css';

export default function CreateRelease() {
  const [openSection, setOpenSection] = useState('Settings'); // Set default to Settings

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

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
          <Link href="/login/dashboard/question1">
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

        {/* Settings */}
        
        <li className="p-3 bg-black text-white flex items-center justify-start hover:text-white transition-all"
          style={{ marginRight: '-16px', width: 'calc(100% + 16px)', borderRadius: '25px 0px 0px 25px' }}>
         <FaCog className="text-xl ml-5" />
          <Link href="#"> <span className="text-xl ml-2">Settings</span> </Link>
        
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
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header */}
        <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white w-full mt-20 mb-4">
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

        {/* Explore All Benefits Box */}
        <div className="w-full max-w-3xl mb-8">
          <div className="rounded-xl p-6 text-white bg-gradient-to-b from-gray-400 via-gray-400 to-black flex items-center h-full">
            <div className="w-1/2 h-full flex items-center justify-center">
              <Image
                src="/images/settings.png"
                alt="Settings Illustration"
                height={350}
                width={350}
                className="object-contain h-full"
              />
             
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-bold mb-4">Enjoy all benefits</h2>
              <p className="mb-6 text-justify">
                Get access to exclusive features and content available only to premium members. Elevate your experience with our premium offerings today!
              </p>
              <button className="bg-white text-black py-3 px-6 rounded-full w-[360px]">Get Premium</button>
            </div>
          </div>
        </div>


          {/* Settings Box */}

          <div className="w-full max-w-3xl">
  <div className="bg-gray-900 p-6 rounded-lg">
    {[
      { label: 'Account', icon: <FaUser /> },
      { label: 'Notification', icon: <FaBell /> },
      { label: 'Password & Security', icon: <FaLock /> },
      { label: 'Plan', icon: <FaFileAlt /> },
      { label: 'Privacy Policy', icon: <FaExclamationTriangle /> },
      { label: 'FAQ', icon: <FaQuestionCircle /> }
    ].map((section, idx) => (
      <div key={idx} className="mb-4">
        <button
          className={`flex justify-between w-full text-white py-4 px-4 rounded-lg items-center ${openSection === section.label ? 'bg-black' : ''}`}
          style={{
            border: '1px solid #757575',
            borderRadius: '12px'
          }}
          onClick={() => toggleSection(section.label)}
        >
          <div className="flex items-center justify-start">
            <span className="mr-2">{section.icon}</span> {section.label}
          </div>
          {openSection === section.label ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        
        {openSection === section.label && section.label === 'Account' && (
          <div className="mt-4 px-4 text-gray-400">
            {/* Personal Details Section */}
            <div className="border border-[#333333] rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Personal Details</h3>
                <button className="flex items-center text-white" style={{ border: '1px solid #333333' }}>
                  Edit  <FaEdit className="ml-2" />
                </button>
              </div>
              
              {/* Name and Last Name */}
              <div className="flex justify-between">
                <div className="w-1/2">
                  <p className="mt-2">Name: John</p>
                  <p className="mt-2">Email: johndoe@example.com</p>
                </div>
                <div className="w-1/2">
                  <p className="mt-2">Last Name: Doe</p>
                  <p className="mt-2">Phone: +1234567890</p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="border border-[#333333] rounded-lg p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Social Media</h3>
                <button className="flex items-center text-white" style={{ border: '1px solid #333333' }}>
                   Edit <FaEdit className="ml-2" />
                </button>
              </div>

              {/* Spotify and Other Social Links */}
              <div className="flex justify-between">
                <div className="w-1/2">
                  <p className="mt-2">Spotify: @johnspotify</p>
                  <p className="mt-2">Twitter: @johndoe</p>
                </div>
                <div className="w-1/2">
                  <p className="mt-2">Instagram: @johndoe</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
         {/* Notification Section */}
         {openSection === section.label && section.label === 'Notification' && (
                  <div className="mt-4 px-4 text-gray-400">
                    <div className="border border-[#333333] rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Notification Preferences</h3>
                        <button className="flex items-center text-white" style={{ border: '1px solid #333333' }}>
                          Edit  <FaEdit className="ml-2" />
                        </button>
                      </div>

                      
                      {/* Notification Preferences */}
<div className="mt-4">
  <div className="flex items-center justify-between">
    <p className="font-bold text-white">Playlist Updates:</p>
    <p>Push, Email</p>
  </div>

  <div className="flex items-center justify-between mt-4">
    <p className="font-bold text-white">Artist Updates:</p>
    <p>Push</p>
  </div>

  <div className="flex items-center justify-between mt-4">
    <p className="font-bold text-white">New Features:</p>
    <p>Push, Email</p>
  </div>

  <div className="flex items-center justify-between mt-4">
    <p className="font-bold text-white">Payment & Subscriptions:</p>
    <p>Push, Email</p>
  </div>

  <div className="flex items-center justify-between mt-4">
    <p className="font-bold text-white">Security:</p>
    <p>Push, Email</p>
  </div>
</div>

                    </div>
                  </div>
                )}
                
       {/* Other sections */}
       {openSection === section.label && openSection !== 'Account' && openSection !== 'Notification' && (
                  <div className="mt-4 px-4 text-gray-400">
                    <p>{section.label} details...</p>
                  </div>
                )}
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}