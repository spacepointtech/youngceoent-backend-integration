// 'use client';
// import React, { useState } from 'react';
// import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBell, FaChevronDown, FaPlus, FaMinus, FaArrowLeft, FaAngleLeft } from 'react-icons/fa';
// import Image from 'next/image';
// import Link from 'next/link';
// import '@/app/style.css';

// export default function CreateRelease() {
  
//   const [contributors, setContributors] = useState([]);
//   const [role, setRole] = useState('');
//   const [name, setName] = useState('');

//   const handleAddContributor = () => {
//     if (role && name) {
//       setContributors([...contributors, { role, name }]);
//       setRole('');
//       setName('');
//     }
//   };

//   const handleRemoveContributor = (index) => {
//     const newContributors = contributors.filter((_, i) => i !== index);
//     setContributors(newContributors);
//   };

//   return (
//     <div className="flex h-screen bg-black font-poppins overflow-auto">
//       {/* Sidebar */}
//       <div className="sidebar bg-white h-full w-80 text-black flex flex-col justify-between p-4 rounded-r-3xl">
//         <div>
//           {/* Profile Section */}
//           <div className="bg-black bg-opacity-77 rounded-lg p-4 mb-8">
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
//           <div className="logo mb-4 flex justify-center">
//             <Image src="/images/blacklogo.png" alt="Young CEO Entertainment" height={400} width={400} />
//           </div>

//           {/* Menu */}
//           <nav className="mt-4">
//             <ul className="space-y-4 text-center">
//               <li className="p-2 rounded-r-lg flex justify-normal items-center">
//                 <FaMusic className="mr-3 justify-end" /> Music
//               </li>
//               <li className="p-2 rounded-r-lg flex justify-normal items-center">
//                 <FaUsers className="mr-3" /> Audience
//               </li>
//               <li className="p-2 rounded-r-lg flex justify-normal items-center">
//                 <FaTshirt className="mr-3" /> Merch
//               </li>
//               <li className="p-2 rounded-r-lg flex justify-normal items-center">
//                 <FaVideo className="mr-3" /> Video & Visuals
//               </li>
//               <li className="p-2 rounded-r-lg flex justify-normal items-center">
//                 <FaCog className="mr-3" /> Settings
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Logout */}
//         <div className="mb-4">
//           <button className="bg-black w-full py-3 rounded-lg flex items-center justify-center text-white">
//             <FaSignOutAlt className="mr-2" /> Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="w-full flex flex-col items-center justify-center">
//         {/* Header */}
//         <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white w-full mt-36">
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

//         {/* Main Body */}
//         <div className="w-full max-w-3xl p-8">
//           {/* Greetings Box */}
//           <div className="bg-[#1A1A1A] text-white p-6 rounded-lg flex justify-between items-center mb-4 relative overflow-visible">
//             <div>
//               <p className="mt-2 opacity-75">--- Song Details Box ---</p>
//             </div>
//           </div>

//           {/* Essential Details text */}
//           <h3 className="text-white text-2xl text-center mb-6">Essential Details for Your Next Big Release</h3>

//           {/* Key Details container box */}
//           <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-lg flex items-start relative">
            
//             {/* Back Button */}
//             <FaAngleLeft
//               className="absolute top-4 left-4 cursor-pointer text-white"
//               onClick={() => window.history.back()}
//             />
//             {/* Background Image */}
//             <Image
//               src="/images/C2.png"
//               alt="Key Details Illustration"
//               objectFit="cover"
//               className="absolute opacity-70 left-0 top-6"
//               width={352}
//               height={250}
//             />

//             <div className="w-1/2 relative z-10 ml-auto mr-8">
//               {/* Text */}
//               <p className="text-white text-xl text-left mb-4">Genre & Credits Details</p>

//               {/* Progress Bar */}
//               <div className=" bg-gray-700 rounded-full h-2 mb-8 ml-auto">
//                 <div className="bg-white h-2 rounded-full" style={{ width: '50%' }}></div>
//               </div>

//               {/* Form Fields */}
//               <div className="space-y-4">
//                 {/* Primary Genre */}
//                 <div>
//                   <label className="text-white block mb-2">Primary Genre<span className="text-red-500">*</span></label>
//                   <input
//                     type="text"
//                     className="w-full p-3 rounded bg-[#CDCDCD] text-black"
//                     placeholder="Primary Genre"
//                     required
//                   />
//                 </div>

//                 {/* Secondary Genre */}
//                 <div>
//                   <label className="text-white block mb-2">Secondary Genre</label>
//                   <input
//                     type="text"
//                     className="w-full p-3 rounded bg-[#CDCDCD] text-black"
//                     placeholder="Secondary Genre"
//                   />
//                   <p className="text-xs text-gray-400 mt-1">Add a secondary genre for additional context, if needed.</p>
//                 </div>

//                 {/* Horizontal Line */}
//                 <hr className="border-t border-white opacity-30 my-4" />

//                 {/* Contributors */}
//                 <div>
//                   <label className="text-white block mb-2">Contributor Role & Name</label>
//                   <input
//                     type="text"
//                     className="w-full p-3 rounded bg-[#CDCDCD] text-black"
//                     placeholder="Contributor Role"
//                     value={role}
//                     onChange={(e) => setRole(e.target.value)}
//                   />
                  
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <input
//                     type="text"
//                     className="w-full p-3 rounded bg-[#CDCDCD] text-black"
//                     placeholder="Contributor Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />

//                   {/* Plus Icon */}
//                   <div
//                     className="bg-[#CDCDCD] p-2 rounded cursor-pointer flex items-center justify-center"
//                     onClick={handleAddContributor}
//                     style={{ width: '45px', height: '45px' }}
//                   >
//                     <FaPlus className="text-black" />
//                   </div>
//                 </div>
//                 <p className="text-xs text-gray-400 mt-2 opacity-60">
//                     List all contributors and their roles, ensuring accuracy.
//                   </p>
//                 {/* List of Contributors */}
//                 {contributors.length > 0 && (
//                   <div className="mt-4 space-y-4">
//                     {contributors.map((contributor, index) => (
//                       <div key={index} className="flex justify-between items-center bg-[#CDCDCD] p-3 rounded">
//                         <span>{contributor.role} - {contributor.name}</span>
//                         <FaMinus className="text-black cursor-pointer" onClick={() => handleRemoveContributor(index)} />
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 <button className="mt-4 bg-white text-black py-2 px-4 rounded">Add Artists</button>

//                {/* Submit and Cancel Buttons */}
//               <div className="mt-6 flex justify-center items-center">
//                 <Link href='/dashboard'>
//                   <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
//                 </Link>

//                 <Link href='/dashboard/rel-quest2'>
//                   <button className="bg-white text-black py-2 px-4 rounded">Next</button>
//                 </Link>
//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import React, { useState } from 'react';
import { FaMusic, FaUsers, FaTshirt, FaVideo, FaCog, FaSignOutAlt, FaBell, FaAngleLeft, FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/style.css';

const Tooltip = ({ message, visible, position }) => {
  return (
    visible && (
      <div className={`absolute bg-black text-white p-2 rounded-md ${position}`}>
        {message}
      </div>
    )
  );
};

export default function CreateRelease() {
  
  const [contributors, setContributors] = useState([]);
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [tooltip, setTooltip] = useState({ visible: false, message: '', position: '' });

  const handleAddContributor = () => {
    if (role && name) {
      setContributors([...contributors, { role, name }]);
      setRole('');
      setName('');
    }
  };

  const handleRemoveContributor = (index) => {
    const newContributors = contributors.filter((_, i) => i !== index);
    setContributors(newContributors);
  };

  const Tooltip = ({ message, visible, position }) => {
    return (
      visible && (
        <div
          className={`absolute bg-black text-white p-1 text-xs rounded-md`}
          style={{ left: position.left, top: position.top }}
        >
          {message}
        </div>
      )
    );
  };
  
  // ...
  
  const showTooltip = (message, e) => {
    const { top, left, height } = e.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      message,
      position: {
        left: left + e.target.offsetWidth + 0, // 5px offset to the right of the mouse
        top: top + window.scrollY // Account for scrolling
      }
    });
  };
  
  const hideTooltip = () => {
    setTooltip({ visible: false, message: '', position: '' });
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
        <header className="bg-black text-white py-4 px-8 flex justify-end items-center space-x-6 border-b border-white w-full mt-36">
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
              <p className="mt-2 opacity-75">--- Song Details Box ---</p>
            </div>
          </div>

          {/* Essential Details text */}
          <h3 className="text-white text-2xl text-center mb-6">Essential Details for Your Next Big Release</h3>

          {/* Key Details container box */}
          <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-lg flex items-start relative">
            
            {/* Back Button */}
            <FaAngleLeft
              className="absolute top-4 left-4 cursor-pointer text-white"
              onClick={() => window.history.back()}
            />
            {/* Background Image */}
            <Image
              src="/images/C2.png"
              alt="Key Details Illustration"
              objectFit="cover"
              className="absolute opacity-70 left-0 top-6"
              width={345}
              height={250}
            />

            <div className="w-1/2 relative z-10 ml-auto mr-8">
              {/* Text */}
              <p className="text-white text-xl text-left mb-4">Genre & Credits Details</p>

              {/* Progress Bar */}
              <div className=" bg-gray-700 rounded-full h-2 mb-8 ml-auto">
                <div className="bg-white h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                
                {/* Primary Genre */}
              <div>
                <label className="text-white block mb-2">Primary Genre<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                  placeholder="Primary Genre"
                  required
                  onMouseEnter={(e) => showTooltip('Enter the main genre of your song.', e)}
                  onMouseLeave={hideTooltip}
                  onFocus={hideTooltip}  // Hide tooltip on focus
                />
              </div>

                {/* Secondary Genre */}
              <div>
                <label className="text-white block mb-2">Secondary Genre</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                  placeholder="Secondary Genre"
                  onMouseEnter={(e) => showTooltip('Add a secondary genre for additional context.', e)}
                  onMouseLeave={hideTooltip}
                  onFocus={hideTooltip}  // Hide tooltip on focus
                />
                <p className="text-xs text-gray-400 mt-1">Add a secondary genre for additional context, if needed.</p>
              </div>

                {/* Horizontal Line */}
                <hr className="border-t border-white opacity-30 my-4" />

               {/* Contributors */}
              <div>
                <label className="text-white block mb-2">Contributor Role & Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                  placeholder="Contributor Role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  onMouseEnter={(e) => showTooltip('Specify the role of the contributor.', e)}
                  onMouseLeave={hideTooltip}
                  onFocus={hideTooltip}  // Hide tooltip on focus
                />
              </div>


              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                  placeholder="Contributor Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onMouseEnter={(e) => showTooltip('--------name of the contributor.', e)}
                  onMouseLeave={hideTooltip}
                  onFocus={hideTooltip}  // Hide tooltip on focus
                />
                <button
                  onClick={handleAddContributor}
                  className="bg-[#CDCDCD] text-white rounded p-3"
                >
                  <FaPlus className="text-black"/>
                </button>
              </div>

                {/* Contributor List */}
                <ul className="mt-4">
                  {contributors.map((contributor, index) => (
                    <li key={index} className="flex justify-between items-center text-white">
                      <span>{`${contributor.role}: ${contributor.name}`}</span>
                      <button
                        onClick={() => handleRemoveContributor(index)}
                        className="text-red-500"
                      >
                        <FaMinus />
                      </button>
                    </li>
                  ))}
                </ul>

                <button className="mt-4 bg-white text-black py-2 px-4 rounded">Add Artists</button>
             
              {/* Submit and Cancel Buttons */}
             <div className="mt-6 flex justify-center items-center">
                 <Link href='/dashboard'>
                  <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
                 </Link>

                <Link href='/dashboard/rel-quest2'>
                  <button className="bg-white text-black py-2 px-4 rounded">Next</button>
                </Link>
              </div>
             
              </div>
            </div>
          </div>
        </div>

         {/* Tooltip */}
      <Tooltip message={tooltip.message} visible={tooltip.visible} position={tooltip.position} />
      </div>
    </div>
  );
}
