'use client';
import '@/app/style.css'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaChevronRight, FaChevronDown, FaEdit } from 'react-icons/fa';

const EditSupport = () => {
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
            <FaEdit className="text-4xl mb-4 opacity-30"/>
            <h2 className="text-2xl font-semibold">Making Edits</h2>
          </div>
          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
          </div>
        </div>
        <p className={`text-sm opacity-75 mb-6 ${openIndex !== null ? 'blur-md' : ''}`}>Answers to questions we are asked most often.</p>
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
    question: 'What do I need to start releasing music?',
    answer: (
      <>
        Just{' '}
        <a href="/signup" className="text-blue-500">
          Become Young Ceo
        </a>{' '}
        using YCE Hub with your email address 🚀
        <br />
        <br />
        Select the plans that are suitable for you 🎶
        <br />
        <br />
        Choose the one that&apos;s right for you and follow the step-by-step create release form process.
      </>
    ),
  },
  {
    question: "Can I edit my release after it's been completed but still in review?",
    answer: "Yes, you can make edits to your release while it is still under review. However, once the release is live on stores, further changes cannot be made."
  },
  {
    question: "If I remove a release from stores, edit and re-upload it, will the same Spotify or iTunes links work?",
    answer: "No, removing and re-uploading a release will result in new links being generated. The original Spotify or iTunes links will no longer be valid."
  },
  {
    question: "Can I add more stores to an existing release?",
    answer: "Yes, you can add more stores to an existing release by editing the distribution options in your YCE account and selecting additional platforms."
  },
  {
    question: "Can I change my release date?",
    answer: "Yes, you can change your release date before the release has gone live. Simply update the release details in your YCE account."
  },
  {
    question: "How do I change my artist or band name?",
    answer: "To change your artist or band name, please contact YCE support. Keep in mind that this may affect your existing releases, and the change could take some time to reflect on all platforms."
  },
];

export default EditSupport;
