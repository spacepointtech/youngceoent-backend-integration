'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronDown, FaEdit, FaChartLine } from 'react-icons/fa';

const PromotionSupport = () => {
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
            <FaChartLine className="text-4xl mb-4 opacity-30"/>
            <h2 className="text-2xl font-semibold">Music Promotion</h2>
          </div>
          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
          </div>
        </div>
        <p className={`text-sm opacity-75 mb-6 ${openIndex !== null ? 'blur-md' : ''}`}>Learn More about Promotion services.</p>
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
  { question: 'What is Chartbreaker?', answer: 'Chartbreaker is our premium music promotion service designed to help your tracks achieve chart success. It includes targeted marketing campaigns, playlist placements, and analytics to boost your music’s visibility and performance.' },
  { question: 'What promotional services do you offer?', answer: 'We offer a range of promotional services, including targeted social media campaigns, playlist pitching, and influencer partnerships. These services are designed to increase your music’s exposure and engagement across various platforms.' },
  { question: 'What happens once I\'ve purchased Chartbreaker?', answer: 'After purchasing Chartbreaker, our team will contact you to discuss your promotional goals and strategies. We’ll set up your campaign, provide regular updates, and deliver comprehensive analytics on your music’s performance throughout the promotion period.' },
];

export default PromotionSupport;
