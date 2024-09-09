'use client';
import '@/app/style.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaChevronRight, FaChevronDown, FaCheck, FaVideo } from 'react-icons/fa';

const MusicVideosSupport = () => {
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
            <FaVideo className="text-4xl mb-4 opacity-30"/>
            <h2 className="text-2xl font-semibold">Music Video</h2>
          </div>
          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
          </div>
        </div>
        <p className={`text-sm opacity-75 mb-6 ${openIndex !== null ? 'blur-md' : ''}`}>Advice on releasing official Music Video</p>
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
  { question: 'Do you offer YouTube services?', answer: 'Yes, we offer a range of YouTube services including content distribution, YouTube Content ID management, and setting up Official Artist Channels to help you maximize your presence and revenue on YouTube.' },
  { question: 'How does YouTube Content ID work?', answer: 'YouTube Content ID is a system that scans uploaded videos on YouTube to detect and identify copyrighted material. If your music is used in a video, Content ID allows you to claim revenue or block the video, depending on your preference. We manage this process for you to ensure your content is properly tracked and monetized.' },
  { question: 'When and how do I get paid video royalties?', answer: 'Video royalties are typically paid out once a month. The payment amount is based on the ad revenue generated from the videos that use your music. You\'ll receive detailed reports on your earnings through our platform, and payments are made to your specified bank account or payment service.' },
  { question: 'Who owns the rights to my music when I distribute with YCE?', answer: 'You retain ownership of your music rights. By distributing your music with YCE, you grant us a license to distribute and monetize your content on your behalf, but the ownership and copyright of your music remain with you.' },
  { question: 'How do I find my YouTube channel ID?', answer: 'To find your YouTube channel ID, go to your YouTube channel, click on your profile picture, and select "YouTube Studio." In the Studio, go to "Settings," then "Channel," and look under the "Advanced settings" tab. Your channel ID will be displayed there.' },
  { question: 'How do I find my YouTube Topic Channel ID?', answer: 'Your YouTube Topic Channel ID can be found using YouTube\'s search functionality or through the YouTube Data API. If you have an Official Artist Channel, it is usually associated with a unique Topic Channel ID, which can be accessed via the YouTube Studio or API tools.' },
  { question: 'How do I get an Official Artist Channel on YouTube?', answer: 'To get an Official Artist Channel on YouTube, you need to apply through the YouTube Artist Verification program. Ensure you meet the eligibility criteria, which include having a significant presence on YouTube, and then submit your application. We can assist you with the application process to increase your chances of approval.' },
  { question: 'I still haven’t received my Official Artist Channel - how long does this take?', answer: 'The process of receiving an Official Artist Channel can take several weeks. It depends on various factors, including the volume of applications and the verification process. If you haven\'t received your channel within the expected timeframe, you can contact YouTube support or our team for an update on your application status.' },
];

export default MusicVideosSupport;
