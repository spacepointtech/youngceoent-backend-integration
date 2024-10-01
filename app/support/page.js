'use client';
import '@/app/style.css';
import React, { useState } from 'react';
import { FaSearch, FaCheck, FaCloudUploadAlt, FaEdit, FaDollarSign, FaDesktop, FaMobileAlt, FaClipboard, FaVideo, FaBook, FaChartLine, FaSadTear, FaHome, FaRegClipboard } from 'react-icons/fa';
import Link from 'next/link';

const SupportPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm) ||
    category.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="support-page bg-black text-white font-poppins">
      <div className="hero-section relative">
        <div className="container mx-auto text-left pt-24 pb-16">
          <h1 className="text-4xl font-semibold mb-8 text-left ml-10">How Can We Help?</h1>
 
          {/* Search Bar */}
          <div className="relative search-container mx-10">
            <FaSearch className="absolute left-1rem top-1/2 transform -translate-y-1/2 text-white search-icon" />
            <input
              type="text"
              placeholder="Search for articles..."
              className="search-input placeholder-opacity-30 text-white pl-12 py-3 border border-white rounded-lg w-full focus:outline-none"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-6 pt-8 pb-16">
        <div className="flex flex-col space-y-6">
          {/* Categories */}
          {filteredCategories.map((category, index) => (
            <Link href={category.link} key={index}>
              <div className="support-box bg-[#484848] bg-opacity-[24%] border border-[#A6A6A6] rounded-lg p-6 flex items-center space-x-4 cursor-pointer">
                {category.icon}
                <div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="text-sm opacity-75">{category.description}</p>
                  <p className="text-sm opacity-25">{category.articles}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = [
  {
    icon: <FaHome size={24} className="text-white" />,
    title: 'Your Account',
    description: 'How to manage your account.',
    articles: '22 Articles',
    link: '/support/your-account', 
  },
  {
    icon: <FaCheck size={24} className="text-white" />,
    title: 'What is Young Ceo Entertainment?',
    description: 'How to get Started releasing music',
    articles: '22 Articles',
    link: '/support/articles', 
  },
  {
    icon: <FaEdit size={24} className="text-white" />,
    title: 'Making Edits',
    description: 'How to make changes to your releases.',
    articles: '22 Articles',
    link: '/support/making-edits', 
  },
  {
    icon: <FaRegClipboard size={24} className="text-white" />,
    title: 'Frequently Asked Questions',
    description: 'Answers to questions we are asked most often.',
    articles: '18 Articles',
    link: '/support/faqs', 
  },
  
  {
    icon: <FaCloudUploadAlt size={24} className="text-white" />,
    title: 'Uploading Music',
    description: 'Advice on using our release builder.',
    articles: '22 Articles',
    link: '/support/uploading-music', 
  },
  
  {
    icon: <FaDollarSign size={24} className="text-white" />,
    title: 'Getting Paid',
    description: 'Info on earning & withdrawing royalties.',
    articles: '22 Articles',
    link: '/support/getting-paid', 
  },
  
  {
    icon: <FaDesktop size={24} className="text-white" />,
    title: 'Music Platforms',
    description: 'Advice on music streaming, download social media services.',
    articles: '22 Articles',
    link: '/support/music-platforms', 
  },
  
  {
    icon: <FaClipboard size={24} className="text-white" />,
    title: 'Licensing, Copyright & Metadata',
    description: 'Learn the rules & regs of music distribution.',
    articles: '22 Articles',
    link: '/support/licensing-copy', 
  },
  
  {
    icon: <FaBook size={24} className="text-white" />,
    title: 'Music Publishing',
    description: 'The ins & outs of Music Publishing.',
    articles: '22 Articles',
    link: '/support/music-publishing', 
  },
  {
    icon: <FaChartLine size={24} className="text-white" />,
    title: 'Music Promotion',
    description: 'Learn more about promotion services.',
    articles: '22 Articles',
    link: '/support/music-promotion', 
  },
  {
    icon: <FaVideo size={24} className="text-white" />,
    title: 'Music Videos',
    description: 'Advice on releasing official music videos.',
    articles: '22 Articles',
    link: '/support/music-videos', 
  },
  {
    icon: <FaMobileAlt size={24} className="text-white" />,
    title: 'Young CEO Mobile App',
    description: 'Get help navigating our app.',
    articles: '22 Articles',
    link: '/support/yce-app', 
  },
  {
    icon: <FaSadTear size={24} className="text-white" />,
    title: 'Thinking of leaving?',
    description: 'We\'ll be sad to see you go...',
    articles: '22 Articles',
    link: '/support/leaving-us', 
  },
];

export default SupportPage;
