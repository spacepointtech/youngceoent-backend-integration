'use client';
import '@/app/style.css'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaChevronRight, FaChevronDown, FaEdit } from 'react-icons/fa';

const FaqComponent = () => {
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
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          </div>
          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={100} width={150} />
          </div>
        </div>
        <p className={`text-sm opacity-75 mb-6 ${openIndex !== null ? 'blur-md' : ''}`}>Answers to questions we are asked most often.</p>
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

// FAQ Items
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
  { question: 'How much does music distribution cost with Young CEO Entertainment?', answer: 'Our music distribution service costs vary depending on the plan you choose. We offer both Single Track Payment and Subscription-based options.' },
  { question: 'How do I remove a release from stores?', answer: 'To remove a release, log in to your account, navigate to your recent releases, and choose the option to take down your music from all stores.' },
  { question: 'What payment methods does YCE accept?', answer: 'We accept various payment methods, including credit/debit cards, and bank transfers.' },
  { question: 'Will YCE promote my music?', answer: 'While YCE focuses on distribution, we do offer additional promotional services at an extra cost. Contact us for more details or catch the form below to receive a call back from our team.' },
  { question: 'How much will I get paid?', answer: 'Your earnings depend on your distribution plan and the revenue generated from your music streams and downloads.' },
  { question: 'How do I create a new release?', answer: 'To create a new release, log in to your account, click on &quot;Create Release,&quot; and follow the steps to upload your music, artwork, and metadata.' },
  { question: 'Do I need to renew my subscription?', answer: 'If you are on a subscription-based plan, it will renew automatically unless you cancel it before the renewal date.' },
  { question: 'Can I edit or remove my release after it’s been sent to stores?', answer: 'Yes, you can edit or remove your release, but certain changes may take time to reflect in all stores.' },
  { question: 'Will YCE take any of my royalties?', answer: 'YCE does not take a percentage of your royalties. You keep 100% of your earnings.' },
  { question: 'How long before my release date should I upload my music?', answer: 'We recommend uploading your music at least 2-3 weeks before your release date to ensure it is available on time.' },
  { question: 'Can I choose where my music is released?', answer: 'Yes, you can select which platforms and regions your music is distributed to during the release creation process.' },
  { question: 'When will royalties be paid into my account?', answer: 'Royalties are typically paid out monthly, but the timing can vary depending on the platform and payment method.' },
  { question: 'How long will it take to review and approve my release?', answer: 'Review and approval usually take 1-2 business days, but it may vary depending on the complexity of your release.' },
  { question: 'How can I find my Spotify URI?', answer: 'You can find your Spotify URI in the Spotify app by navigating to your profile or release, clicking on the three dots, and selecting "Copy Spotify URI".' },
  { question: 'How does the affiliates program work?', answer: 'Our affiliates program allows you to earn commissions by referring new artists to our platform. Sign up through your account to get started.' },
  { question: 'How to enter the Press Your Sound competition?', answer: 'To enter, submit your best track through our competition page before the deadline. Winners will be announced on our website and social media.' },
  { question: 'How does YCE Music Mastering work?', answer: 'Our mastering service enhances your tracks with professional sound quality. Upload your tracks, and our team will handle the rest.' },
];

export default FaqComponent;
