'use client';
import '@/app/style.css'
import React, { useState } from 'react';
import { FaSearch, FaCheck, FaCloudUploadAlt, FaEdit, FaDollarSign, FaUser, FaDesktop, FaMobileAlt, FaClipboard, FaVideo, FaBook, FaChartLine, FaSadTear} from 'react-icons/fa';
import Link from 'next/link'; // Import Link from Next.js if you're using Next.js

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
   
     {/* Hero Section with Wave */}
      <div className="hero-section relative">
        <div className="container mx-auto text-left pt-24">
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

        {/* Wave Shape */}
        <div className="wave-shape"></div>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-6 pb-16">
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
    icon: <FaEdit size={24} className="text-white" />,
    title: 'Frequently Asked Questions',
    description: 'Answers to questions we are asked most often.',
    articles: '18 Articles',
    link: '/support/faqs', 
  },
  {
    icon: <FaCheck size={24} className="text-white" />,
    title: 'The Basics',
    description: 'How to get Started releasing music',
    articles: '22 Articles',
    link: '/support/articles', 
  },
  {
    icon: <FaCloudUploadAlt size={24} className="text-white" />,
    title: 'Uploading Music',
    description: 'Advice on using our release builder.',
    articles: '22 Articles',
    link: '/support/uploading-music', 
  },
  {
    icon: <FaEdit size={24} className="text-white" />,
    title: 'Making Edits',
    description: 'How to make changes to your releases.',
    articles: '22 Articles',
    link: '/support/making-edits', 
  },
  {
    icon: <FaDollarSign size={24} className="text-white" />,
    title: 'Getting Paid',
    description: 'Info on earning & withdrawing royalties.',
    articles: '22 Articles',
    link: '/support/getting-paid', 
  },
  {
    icon: <FaUser size={24} className="text-white" />,
    title: 'Your Account',
    description: 'How to manage your account.',
    articles: '22 Articles',
    link: '/support/your-account', 
  },
  {
    icon: <FaDesktop size={24} className="text-white" />,
    title: 'Music Platforms',
    description: 'Advice on music streaming, download social media services.',
    articles: '22 Articles',
    link: '/support/music-platforms', 
  },
  {
    icon: <FaMobileAlt size={24} className="text-white" />,
    title: 'Young CEO Music App',
    description: 'Get help navigating our app.',
    articles: '22 Articles',
    link: '/support/yce-app', 
  },
  {
    icon: <FaClipboard size={24} className="text-white" />,
    title: 'Licensing, Copyright & Metadata',
    description: 'Learn the rules & regs of music distribution.',
    articles: '22 Articles',
    link: '/support/licensing-copy', 
  },
  {
    icon: <FaVideo size={24} className="text-white" />,
    title: 'Music Videos',
    description: 'Advice on releasing official music videos.',
    articles: '22 Articles',
    link: '/support/music-videos', 
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
    icon: <FaSadTear size={24} className="text-white" />,
    title: 'Thinking of leaving?',
    description: 'We\'ll be sad to see you go...',
    articles: '22 Articles',
    link: '/support/leaving-us', 
  },
];

export default SupportPage;
