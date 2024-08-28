'use client';
import '@/app/style.css';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronDown, FaCheck } from 'react-icons/fa';

const PublishingSupport = () => {
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
            <FaCheck className="text-4xl mb-4 opacity-30"/>
            <h2 className="text-2xl font-semibold">The Basics</h2>
          </div>
          <div className="faq-logo">
            <img src="/images/logo.png" alt="Young CEO Entertainment" height={100} width={150} />
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

// Example FAQ items
const faqItems = [
  { question: 'What is Young Ceo Entertainment', answer: '' },
  { question: 'How much does music distribution cost with Young CEO Entertainment ?', answer: '' },
  { question: 'Can I release music for multiple artists from one account ?', answer: '' },
  { question: 'Who owns the rights to my music when I distribute with YCE ?', answer: '' },
  { question: 'What does (In Review), (Scheduled) and (Sent To Stores) mean on my releases ?', answer: '' },
  { question: 'Can I release music in specific countries ?', answer: '' },
  { question: 'Can I view my music analytics in more detail ?', answer: '' },
  { question: 'How does Pre-Release work ?', answer: '' },
  { question: 'Can I edit or remove my release after its been sent to stores?', answer: '' },
  { question: 'What is Pre-Order Instant Gratification ?', answer: '' },
  { question: 'Can I set the price of my music ?', answer: '' },
  { question: 'Can I release someone elses music from my account ?', answer: '' },
  { question: 'Can I choose where my music is released ?', answer: '' },
  { question: 'How many tracks are on a single, EP and album ?', answer: '' },
  { question: 'When will my YCE Merch arrive ?', answer: '' },
  { question: 'Does YCE Music offer a free trial?', answer: '' },
];

export default PublishingSupport;
