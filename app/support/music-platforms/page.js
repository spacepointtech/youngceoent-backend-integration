'use client';
import '@/app/style.css';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronDown, FaDesktop } from 'react-icons/fa';

const PlatformSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="support-page bg-black text-white font-poppins">
      
      {/* Hero Section with Wave */}
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

        {/* Wave Shape */}
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
            <FaDesktop className="text-4xl mb-4 opacity-30"/>
            <h2 className="text-2xl font-semibold">Music Platforms</h2>
          </div>
          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
          </div>
        </div>
        <p className={`text-sm opacity-75 mb-6 ${openIndex !== null ? 'blur-md' : ''}`}>Advice on music streaming, download social media services</p>
        <p className={`text-sm opacity-50 mb-12 ${openIndex !== null ? 'blur-md' : ''}`}>{filteredFaqItems.length} Articles</p>

       
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
                      <p>{item.answer}</p>
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
   {
    question: 'How do I check if my music is live in stores?',
    answer: 'You can check if your music is live by logging into your YCE Dashboard, navigating to your releases, and checking the status of your release. If it’s marked as “Live,” it’s available in stores. It may take some time for your release to be live on all platforms, so please be patient.'
  },
  {
    question: 'Why is my release not live on Apple Music or iTunes?',
    answer: 'If your release is not live on Apple Music or iTunes, it might be due to delays in processing by the platform. Ensure that all metadata and assets meet Apple’s guidelines. If you have followed all steps correctly, please wait for 72 hours and check again. If the issue persists, contact YCE support for further assistance.'
  },
  {
    question: 'What payment methods does YCE accept?',
    answer: 'YCE accepts various payment methods including credit/debit cards, PayPal, and bank transfers. These options are available at the checkout when you select a subscription plan or make a payment for additional services.'
  },
  {
    question: 'What is YouTube Music?',
    answer: 'YouTube Music is a music streaming service by YouTube that allows users to stream songs and music videos. If you distribute your music through YCE, it will be available on YouTube Music alongside other streaming platforms, giving you more exposure.'
  },
  {
    question: 'How do I sign up for Apple Music for Artists?',
    answer: 'To sign up for Apple Music for Artists, visit the Apple Music for Artists website, log in with your Apple ID, and follow the instructions to claim your artist profile. You may need to verify your identity through your distributor or label. Once verified, you can access insights and data about your music on Apple Music.'
  },
  {
    question: 'How do I get a blue tick on my Spotify profile?',
    answer: 'To get a blue tick (verification badge) on your Spotify profile, you need to claim your artist profile through Spotify for Artists. Once your profile is claimed, you will be eligible for verification. Ensure that your profile is complete with bio, photos, and social media links to increase your chances of getting verified.'
  },
  {
    question: 'How do I sign up for Spotify for Artists?',
    answer: 'To sign up for Spotify for Artists, visit the Spotify for Artists website and log in with your Spotify account. If you don’t have an account, create one. After logging in, you can claim your artist profile and gain access to insights and tools to manage your music on Spotify.'
  },
  {
    question: 'Which stores & platforms can I release my music on?',
    answer: 'With YCE, you can release your music on a wide range of stores and platforms including Spotify, Apple Music, Amazon Music, YouTube Music, Deezer, Tidal, and more. You can choose which platforms you want to distribute to during the release creation process.'
  },
  {
    question: 'Can I release music to Instagram & Facebook?',
    answer: 'Yes, you can release music to Instagram and Facebook through YCE. When you distribute your music, it will be made available on these social media platforms for use in Stories, Reels, and other content.'
  },
  {
    question: 'How do I find my Spotify ID?',
    answer: 'To find your Spotify ID, log in to your Spotify for Artists account, navigate to your artist profile, and copy the ID from the URL or the profile settings. This ID is important for sharing and linking to your music.'
  },
  {
    question: 'What is artificial streaming?',
    answer: 'Artificial streaming refers to the use of bots, scripts, or other methods to inflate streaming numbers on platforms like Spotify or Apple Music. It is against the terms of service of these platforms and can result in the removal of your music or termination of your account. Always ensure that your streams are organic and authentic.'
  },
];

export default PlatformSupport;
