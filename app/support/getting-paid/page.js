'use client';
import '@/app/style.css'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronDown, FaDollarSign } from 'react-icons/fa';

const GetPaidComponent = () => {
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
            <FaDollarSign className="text-4xl mb-4 opacity-30"/>
            <h2 className="text-2xl font-semibold">Getting Paid</h2>
          </div>
          <div className="faq-logo">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
          </div>
        </div>
        <p className={`text-sm opacity-75 mb-6 ${openIndex !== null ? 'blur-md' : ''}`}>Info on earning and withdrawing royalties</p>
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

// Updated FAQ Items
const faqItems = [
  {
    question: 'How do I withdraw royalties?',
    answer: 'To withdraw royalties, log in to your account and navigate to the "Payouts" section. You can choose your preferred payout method and follow the instructions to complete the withdrawal process. Payments are typically processed within 7-10 business days.'
  },
  {
    question: 'How do I add a royalty payout method?',
    answer: 'Go to the "Account Settings" or "Payout Settings" section in your account dashboard. There, you can add or update your preferred payout method, such as bank transfer, PayPal, or other available options.'
  },
  {
    question: 'My payments aren\'t working. Can I change my royalty payout method?',
    answer: 'Yes, if you’re experiencing issues with payments, you can change your payout method by accessing the "Payout Settings" in your account. Ensure that your new payment details are correctly entered and saved.'
  },
  {
    question: 'How do I withdraw royalties with Payoneer?',
    answer: 'To withdraw royalties using Payoneer, you need to link your Payoneer account in the "Payout Settings" section of your dashboard. Once linked, you can select Payoneer as your payout method when requesting a withdrawal.'
  },
  {
    question: 'How do I get more streams & sales?',
    answer: 'To increase streams and sales, consider investing in marketing and promotional strategies. Utilize social media, collaborate with influencers, and optimize your music for search engines. Engaging with your audience and releasing high-quality content regularly can also boost your visibility.'
  },
  {
    question: 'What is the minimum amount I can withdraw?',
    answer: 'The minimum withdrawal amount varies depending on the payout method and the platform’s policies. Typically, the minimum is set to ensure that transaction fees are covered. Check the specific requirements in your payout settings.'
  },
  {
    question: 'What does Pending License Verification mean?',
    answer: 'Pending License Verification means that your release is currently undergoing a review process to ensure that all licensing requirements are met. This process helps verify that your music is compliant with copyright and licensing regulations before it goes live.'
  },
  {
    question: 'Can I automatically split royalties with collaborators, band members etc?',
    answer: 'Yes, you can set up split royalties by defining the distribution percentages among collaborators and band members in the release settings. Ensure all parties involved are added and their share is accurately specified.'
  },
  {
    question: 'How do I add split royalty payments to a release?',
    answer: 'To add split royalty payments, go to the "Release Settings" during the release creation or editing process. You can specify the percentage of royalties each collaborator or band member will receive.'
  },
  {
    question: 'How do I edit or remove split royalty payments from a release?',
    answer: 'To edit or remove split royalty payments, access the "Release Settings" in your account. You can modify the payment splits or remove collaborators as needed. Changes will be reflected in future payments.'
  },
  {
    question: 'What’s the difference between Track Splits and Release Splits?',
    answer: 'Track Splits allocate royalties based on individual tracks within a release, while Release Splits allocate royalties across the entire release. Choose the appropriate option based on how you want to distribute earnings among tracks or releases.'
  },
  {
    question: 'What are pending royalties?',
    answer: 'Pending royalties are earnings that have been accumulated but not yet processed for payout. This can occur due to delays in payment processing, pending sales reports, or adjustments that need to be made before finalizing the payout.'
  },
  {
    question: 'Can I withdraw royalties to PayPal?',
    answer: 'Yes, you can withdraw royalties to PayPal if you have linked your PayPal account in the "Payout Settings." Ensure your PayPal account is correctly set up and verified to receive payments.'
  },
  {
    question: 'Why do I need to enter my bank details again for royalty payouts?',
    answer: 'You may need to re-enter your bank details if there have been changes to our payment systems, or if your details were not saved correctly. This ensures that your payments are directed to the correct account.'
  },
  {
    question: 'Bank transfer fees for royalty payouts',
    answer: 'Bank transfer fees may apply depending on your bank and the amount being transferred. Check with your bank for specific fees associated with receiving international or domestic transfers.'
  },
  {
    question: 'Why is my royalty payment lower than I expected?',
    answer: 'Royalty payments may be lower due to various factors such as transaction fees, distribution costs, or adjustments based on sales reports. Review your account statements and payout history for details.'
  },
  {
    question: 'Why don’t my streams and views match my royalty payments?',
    answer: 'Differences between streams/views and royalty payments can occur due to factors like processing delays, reporting discrepancies, or adjustments for refunds and chargebacks. Ensure you review detailed reports for accurate insights.'
  },
];

export default GetPaidComponent;
