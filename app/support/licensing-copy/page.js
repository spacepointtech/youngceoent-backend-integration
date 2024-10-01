'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronDown, FaEdit, FaClipboard } from 'react-icons/fa';
import '@/app/style.css';

const LicenseSupport = () => {
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
            <FaClipboard className="text-4xl mb-4 opacity-30"/>
            <h2 className="text-2xl font-semibold">Licensing, Copyright & Metadata</h2>
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
    question: 'Do I need a license to release my music?',
    answer: 'Yes, you need to ensure that you have the appropriate licenses to release your music. This includes mechanical licenses for cover songs, synchronization licenses if your music will be used in videos, and distribution licenses for getting your music on platforms like Spotify and Apple Music.'
  },
  {
    question: 'What is a UPC/EAN code?',
    answer: 'A UPC (Universal Product Code) or EAN (European Article Number) is a barcode that helps digital platforms identify your release. It\’s required for distributing your music. YCE can provide UPC codes for your releases if you don\’t have one.'
  },
  {
    question: 'Can I release cover songs, remixes, or songs using samples?',
    answer: 'Yes, you can release cover songs, remixes, or songs using samples, but you must have the necessary rights and permissions. For cover songs, you\’ll need a mechanical license. For remixes and samples, you must get approval from the original creators or rights holders.'
  },
  {
    question: 'Will YCE promote my music?',
    answer: 'While YCE primarily focuses on music distribution, we also offer promotional services at an additional cost. These services include playlist pitching, social media promotions, and press coverage. Contact us for more information about our promotional packages.'
  },
  {
    question: 'Does YCE provide ISRC & UPC codes?',
    answer: 'Yes, YCE provides both ISRC (International Standard Recording Code) and UPC codes for your releases. An ISRC code uniquely identifies your track and is essential for tracking sales and streams. A UPC code is required for your release as a whole.'
  },
  {
    question: 'Can I work with other distributors & record labels at the same time as YCE?',
    answer: 'Yes, you can work with other distributors and record labels simultaneously, but it\’s important to ensure that your contracts do not conflict. Some distributors and labels may have exclusivity clauses, so be sure to review your agreements carefully.'
  },
  {
    question: 'What is an ISRC code?',
    answer: 'An ISRC (International Standard Recording Code) is a unique identifier for a specific recording of a song. It is used to track sales, streams, and radio plays. YCE provides ISRC codes if you don\’t already have them for your tracks.'
  },
  {
    question: 'Can I use existing ISRC or UPC codes?',
    answer: 'Yes, you can use existing ISRC or UPC codes if you already have them. If you\’re re-releasing music that has been previously distributed, using the same codes will help maintain consistency in tracking your music\’s performance.'
  },
  {
    question: 'Where can I see my contract with Young Ceo Entertainment?',
    answer: (
      <>
        You can view your contract and all the associated terms and conditions by visiting the 
        <a href="/terms-and-conditions" className="text-blue-500"> Terms & Conditions </a> 
        page. It&apos;s important to review this document to understand your rights and obligations as a Young Ceo.
      </>
    ),
  },
];

export default LicenseSupport;
