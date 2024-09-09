
'use client';
import '@/app/style.css';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronDown, FaUser, FaHome } from 'react-icons/fa';

const AccountSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  
  const filteredFaqItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="support-page bg-black text-white font-poppins">
      
      <div className="hero-section relative">
        <div className="container mx-auto text-center pt-24">
          <h1 className="text-4xl font-semibold mb-8 text-left ml-5">How Can we help?</h1>

          {/* Search Bar */}
          <div className="relative search-container mx-auto mb-12">
            <input
              type="text"
              placeholder="Search for articles..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input placeholder-opacity-30 text-white pl-12 py-3 border border-white rounded-lg w-full focus:outline-none"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white search-icon" />
          </div>
        </div>

       
        <div className="wave-shape"></div>
      </div>

      {/* Back Link */}
      <div className="container mx-auto px-6 py-4">
        <a href="/support" className="back-link text-white text-lg opacity-50">
          &lt; Back
        </a>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-6 pb-16">
        <div className={`faq-header flex items-center justify-between mb-6 ${openIndex !== null ? 'blur-md' : ''}`}>
          <div className="flex flex-col">
            <FaHome className="text-4xl mb-4 opacity-30"/>
            <h2 className="text-2xl font-semibold">Your Account</h2>
          </div>
          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
          </div>
        </div>
        <p className={`text-sm opacity-75 mb-6 ${openIndex !== null ? 'blur-md' : ''}`}>How to get Started releasing music</p>
        <p className={`text-sm opacity-50 mb-12 ${openIndex !== null ? 'blur-md' : ''}`}>{filteredFaqItems.length} Articles</p>

        {/* FAQ Container */}
        <div className="faq-container bg-[#484848] bg-opacity-[24%] border border-[#A6A6A6] rounded-lg p-6">
          <div className="faq-list">
            {filteredFaqItems.length > 0 ? (
              filteredFaqItems.map((item, index) => (
                <div key={index} className={`faq-item flex flex-col py-4 border-b border-gray-700 ${openIndex !== null && openIndex !== index ? 'blur-md' : ''}`}>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown(index)}>
                    <p>{item.question}</p>
                    {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                  </div>
                  {openIndex === index && (
                    <div className="answer-box bg-[#484848] bg-opacity-[50%] border border-[#A6A6A6] rounded-lg p-4 mt-4">
                      <p>{item.answer || 'loremipsum50'}</p> {/* Placeholder text */}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No articles found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


const faqItems = [
  { question: 'When is my subscription renewal date?', answer: 'Your subscription renewal date is typically one year from the date of your last payment. You can check the exact renewal date by logging into your account and navigating to the "Subscription" section.' },
  { question: 'How do I see my orders & transaction history?', answer: 'To view your orders and transaction history, log into your account and go to the "Orders" section under your profile. There, you can see a detailed list of all your past transactions.' },
  { question: 'When will I get a response from my support query?', answer: 'Support queries are typically responded to within 24-48 hours. During peak times, it may take slightly longer. You will receive a notification once your query has been addressed.' },
  { question: 'What if I forgot my password?', answer: 'If you forgot your password, you can reset it by clicking on the "Forgot Password" link on the login page. Follow the instructions to receive a password reset link via email.' },
  { question: 'Why has my account been suspended?', answer: 'Your account may be suspended due to non-payment, violation of terms of service, or suspicious activity. Please contact our support team to resolve the issue and regain access to your account.' },
  { question: 'What currency will my transactions and royalties be displayed in?', answer: 'Transactions and royalties are displayed in the currency of your country. However, you can change this preference in the account settings if you wish to see it in a different currency.' },
  { question: 'How do I change the email address linked to my account?', answer: 'To change the email address linked to your account, log in and go to the "Account Settings" section. From there, you can update your email address.' },
  { question: 'Can I remove an artist from my plan?', answer: 'Yes, you can remove an artist from your plan by navigating to the "Manage Artists" section in your account. Select the artist you want to remove and confirm the action.' },
  { question: 'How do I update the phone number linked to my YCE account?', answer: 'To update your phone number, go to the "Account Settings" section of your profile. Enter your new phone number and verify it through the confirmation code sent to your device.' },
  { question: 'I\'ve been wrongly charged', answer: 'If you believe you have been wrongly charged, please contact our support team with the details of the transaction. We will investigate the issue and provide a resolution.' },
  { question: 'Can I renew my subscription early?', answer: 'Yes, you can renew your subscription early by going to the "Subscription" section in your account. Choose the "Renew Now" option and complete the payment process.' },
  { question: 'What is YCE Independent Label?', answer: 'YCE Independent Label is a subscription-based service that allows independent artists to distribute their music across major streaming platforms with additional support and promotional tools.' },
  { question: 'I’ve been moved onto the new YCE Independent Label. How does it work?', answer: 'If you have been moved to the new YCE Independent Label, your existing releases will remain active. You will gain access to new features and tools designed to enhance your music distribution experience.' },
  { question: 'What is Release Protection?', answer: 'Release Protection is an optional add-on that ensures your music remains live on streaming platforms even if your subscription lapses or is canceled. It also protects against accidental takedowns.' },
  { question: 'How does the EPK Builder work?', answer: 'The EPK (Electronic Press Kit) Builder is a tool that helps you create a professional press kit for your music. It includes customizable templates, media upload options, and sharing capabilities to help you promote your work.' },
];

export default AccountSupport;
