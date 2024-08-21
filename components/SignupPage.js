// // SignupPage.js Frontend
// import React from 'react';
// import { FaGoogle } from 'react-icons/fa'; // Import FaGoogle icon
// import Image from 'next/image';
// import Link from 'next/link';

// export default function SignupPage() {
//   return (
//     <div className="login-wrapper">
//       <div className="background-image"></div>
//       <div className="login-content">
//         <div className="logo-container">
//           <Link href="/">
//             <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
//           </Link>
//         </div>
//         <div className="login-form-container">
//           <h2 className="login-title">Become The Young CEO!</h2>
//           <p className="login-subtitle">
//             Already Young CEO?{' '}
//             <Link href="/login" className="signup-link">Log In</Link>
//           </p>
//           <form>
//             <input type="email" placeholder="Email" className="login-input" required />
//             <input type="password" placeholder="Password" className="login-input" required />
//             <div className="policy-checkbox">
//               <input type="checkbox" id="agree-policy" className="policy-input" required />
//               <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
//             </div>
//             <button type="submit" className="login-button">Become The Young CEO Now!!</button>
//             <button type="button" className="google-login-button">
//               <FaGoogle className="google-icon" />
//               Continue With Google
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



// SignupPage.js Backend Integration


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { FaGoogle } from 'react-icons/fa';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function SignupPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/auth/signup', { email, password });
//       setMessage(res.data.message);
//       router.push('/dashboard');
//     } catch (err) {
//       setMessage(err.response.data.message);
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="background-image"></div>
//       <div className="login-content">
//         <div className="logo-container">
//           <Link href="/">
//             <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
//           </Link>
//         </div>
//         <div className="login-form-container">
//           <h2 className="login-title">Become The Young CEO!</h2>
//           <p className="login-subtitle">
//             Already Young CEO?{' '}
//             <Link href="/login" className="signup-link">Log In</Link>
//           </p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Email"
//               className="login-input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="login-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <div className="policy-checkbox">
//               <input type="checkbox" id="agree-policy" className="policy-input" required />
//               <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
//             </div>
//             <button type="submit" className="login-button">Become The Young CEO Now!!</button>
//             <a href="http://localhost:5000/auth/google" className="google-login-button">
//               <FaGoogle className="google-icon" />
//               Continue With Google
//             </a>
//           </form>
//           {message && <p>{message}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { FaGoogle } from 'react-icons/fa';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function SignupPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/auth/signup', { email, password });
//       setMessage(res.data.message);
//       router.push('/dashboard');
//     } catch (err) {
//       setMessage(err.response.data.message);
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="background-image"></div>
//       <div className="login-content">
//         <div className="logo-container">
//           <Link href="/">
//             <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
//           </Link>
//         </div>
//         <div className="login-form-container">
//           <h2 className="login-title">Become The Young CEO!</h2>
//           <p className="login-subtitle">
//             Already Young CEO?{' '}
//             <Link href="/login" className="signup-link">Log In</Link>
//           </p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Email"
//               className="login-input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="login-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <div className="policy-checkbox">
//               <input type="checkbox" id="agree-policy" className="policy-input" required />
//               <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
//             </div>
//             <button type="submit" className="login-button">Become The Young CEO Now!!</button>
//             <a href="http://localhost:5000/auth/google" className="google-login-button">
//               <FaGoogle className="google-icon" />
//               Continue With Google
//             </a>
//           </form>
//           {message && <p>{message}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// Razorpay logic

'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // First step: Sign up the user
      const res = await axios.post('http://localhost:5000/auth/signup', { email, password });
      setMessage(res.data.message);

      // After successful signup, redirect to the subscription page
      router.push('/subscription'); // Ensure you have the subscription page at this route
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="background-image"></div>
      <div className="login-content">
        <div className="logo-container">
          <Link href="/">
            <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="login-form-container">
          <h2 className="login-title">Become The Young CEO!</h2>
          <p className="login-subtitle">
            Already Young CEO?{' '}
            <Link href="/login" className="signup-link">Log In</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="policy-checkbox">
              <input type="checkbox" id="agree-policy" className="policy-input" required />
              <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
            </div>
            <button type="submit" className="login-button">Become The Young CEO Now!!</button>
            <a href="http://localhost:5000/auth/google" className="google-login-button">
              <FaGoogle className="google-icon" />
              Continue With Google
            </a>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}
