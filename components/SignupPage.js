// SignupPage.js
import React from 'react';
import { FaGoogle } from 'react-icons/fa'; // Import FaGoogle icon
import Image from 'next/image';
import Link from 'next/link';

export default function SignupPage() {
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
          <form>
            <input type="email" placeholder="Email" className="login-input" required />
            <input type="password" placeholder="Password" className="login-input" required />
            <div className="policy-checkbox">
              <input type="checkbox" id="agree-policy" className="policy-input" required />
              <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
            </div>
            <button type="submit" className="login-button">Become The Young CEO Now!!</button>
            <button type="button" className="google-login-button">
              <FaGoogle className="google-icon" />
              Continue With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
