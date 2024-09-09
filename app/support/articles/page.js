'use client';
import '@/app/style.css';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronDown, FaCheck } from 'react-icons/fa';

const ArticlesReleasesComponent = () => {
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
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
          </div>
        </div>
        <p className={`text-sm opacity-75 mb-6 ${openIndex !== null ? 'blur-md' : ''}`}>How to get Started releasing music</p>
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
  { question: 'What is Young Ceo Entertainment', answer: 'Young CEO Entertainment is a platform for local street artists, rappers, musicians, and beat producers to empower them to become their own CEOs and bring them to major audio streaming platforms like Spotify, AppleMusic, JioSaavn etc. Popular streaming platforms like these do not work with artists directly, they only work with distribution companies. That is where we come into the picture. We enable artists to leave the hassles of distribution to us and focus more on their art & creativity!' },
  { 
    question: 'How much does music distribution cost with Young CEO Entertainment?', 
    answer: 'The cost for music distribution with Young CEO Entertainment depends on the plan you choose. We offer various plans to suit different needs, ranging from single-track releases to full album distributions. Please visit our pricing page for detailed information.' 
  },
  { 
    question: 'Can I release music for multiple artists from one account?', 
    answer: 'Yes, you can release music for multiple artists from one account. This feature is particularly useful for record labels or producers managing multiple talents.' 
  },
  { 
    question: 'Who owns the rights to my music when I distribute with YCE?', 
    answer: 'When you distribute with Young CEO Entertainment, you retain 100% ownership of your music rights. We only assist in distribution and do not claim any ownership of your content.' 
  },
  { 
    question: 'What does (In Review), (Scheduled) and (Sent To Stores) mean on my releases?', 
    answer: '(In Review) means your release is being reviewed by our team before distribution. (Scheduled) means your release date has been set, and the content will be sent to stores on that date. (Sent To Stores) means your release has been successfully sent to the selected platforms and is awaiting publication.' 
  },
  { 
    question: 'Can I release music in specific countries?', 
    answer: 'Yes, you can choose to release your music in specific countries. This feature allows you to target your audience more effectively based on geographical preferences.' 
  },
  { 
    question: 'Can I view my music analytics in more detail?', 
    answer: 'Yes, we provide detailed analytics on your music performance, including streams, downloads, and revenue generated. You can access this data through your account dashboard.' 
  },
  { 
    question: 'How does Pre-Release work?', 
    answer: 'Pre-Release allows you to set a date for your music to be available for pre-order before the official release. Fans can preview and purchase your music ahead of time, generating early sales and anticipation.' 
  },
  { 
    question: 'Can I edit or remove my release after it\'s been sent to stores?', 
    answer: 'Yes, you can request edits or removal of your release after it has been sent to stores. However, certain changes might be restricted depending on the platform\'s policies.' 
  },
  { 
    question: 'What is Pre-Order Instant Gratification?', 
    answer: 'Pre-Order Instant Gratification allows fans who pre-order your music to immediately receive a specific track or content as a reward for their early purchase.' 
  },
  { 
    question: 'Can I set the price of my music?', 
    answer: 'Yes, you can set the price of your music when distributing with Young CEO Entertainment. Pricing options may vary depending on the platform and type of release.' 
  },
  { 
    question: 'Can I release someone else\'s music from my account?', 
    answer: 'Yes, you can release someone else\'s music from your account as long as you have the necessary permissions and rights to distribute their content.' 
  },
  { 
    question: 'Can I choose where my music is released?', 
    answer: 'Yes, you have the flexibility to choose which platforms and regions your music will be released in. This allows you to tailor your distribution strategy to your target audience.' 
  },
  { 
    question: 'How many tracks are on a single, EP, and album?', 
    answer: 'A single typically contains 1-2 tracks, an EP (Extended Play) contains 3-5 tracks, and an album usually consists of 6 or more tracks. The exact definitions may vary slightly by platform.' 
  },
  { 
    question: 'When will my YCE Merch arrive?', 
    answer: 'YCE Merch typically arrives within 7-14 business days, depending on your location and shipping method. You will receive a tracking number once your order has been shipped.' 
  },
  { 
    question: 'Does YCE Music offer a free trial?', 
    answer: 'Yes, we offer a free trial for new users to explore our services before committing to a subscription plan. The trial includes limited access to our features, allowing you to experience our platform firsthand.' 
  },
];

export default ArticlesReleasesComponent;
