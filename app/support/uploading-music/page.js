'use client';
import '@/app/style.css';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronDown, FaCloudUploadAlt } from 'react-icons/fa';

const UploadComponent = () => {
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
            <FaCloudUploadAlt className="text-4xl mb-4 opacity-30"/>
            <h2 className="text-2xl font-semibold">Uploading Music</h2>
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
  { 
    question: 'Why am I blocked from uploading my music to Soundcloud?', 
    answer: 'You might be blocked from uploading music to SoundCloud due to a violation of their terms of service, such as copyright infringement, inappropriate content, or repeated violations. Make sure your content adheres to SoundCloud’s guidelines and reach out to their support if you believe this is an error.' 
  },
  { 
    question: 'How do I change the track order on my release?', 
    answer: 'To change the track order on your release, navigate to the "Release Builder" in your dashboard. You can drag and drop the tracks into your desired order before finalizing the release.' 
  },
  { 
    question: 'Why isn\'t my artwork being accepted?', 
    answer: 'Your artwork may not be accepted if it doesn’t meet the required specifications, such as resolution, file format, or content guidelines. Make sure your image is at least 3000x3000 pixels, in JPEG or PNG format, and doesn’t contain any explicit or copyrighted material.' 
  },
  { 
    question: 'Can I leave my release\'s secondary genre blank?', 
    answer: 'Yes, you can leave the secondary genre blank if you feel your release doesn’t fit into an additional genre category. It’s optional and primarily used to better categorize your music on streaming platforms.' 
  },
  { 
    question: 'What if my music\'s language isn\'t available on the Release Builder?', 
    answer: 'If your music\'s language isn\'t listed in the Release Builder, choose the closest available option or contact our support team to see if we can accommodate your specific language needs.' 
  },
  { 
    question: 'What if my genre isn\'t available on the Release Builder?', 
    answer: 'If your genre isn’t listed, select the closest genre available. You can also contact our support team to request the addition of your specific genre.' 
  },
  { 
    question: 'What should I put for my record label?', 
    answer: 'If you have a registered record label, enter its name in the designated field. If you’re independent, you can enter your name, artist name, or create a label name that represents your brand.' 
  },
  { 
    question: 'What should I put for the copyright holder & copyright year?', 
    answer: 'The copyright holder is typically the person or entity that owns the rights to the music, which could be you, your record label, or a publisher. The copyright year should be the year the music was created or released.' 
  },
  { 
    question: 'Can I use an existing ISRC code?', 
    answer: 'Yes, you can use an existing ISRC (International Standard Recording Code) if you have one. If not, YCE Music will generate one for you when you distribute your music.' 
  },
  { 
    question: 'How do I include featured artists on my release?', 
    answer: 'You can include featured artists by adding their names in the "Featured Artists" section when building your release. Make sure you have the proper credits and permissions before listing featured artists.' 
  },
  { 
    question: 'What if my music has explicit lyrics?', 
    answer: 'If your music contains explicit lyrics, you must mark it as explicit during the release process. This ensures that streaming platforms categorize your music correctly, and it may be subject to content restrictions on some platforms.' 
  },
  { 
    question: 'What format does my artwork need to be in?', 
    answer: 'Your artwork needs to be in JPEG or PNG format with a minimum resolution of 3000x3000 pixels. It should not contain any copyrighted material, and must adhere to platform guidelines regarding explicit content.' 
  },
  { 
    question: 'What format does my audio need to be in?', 
    answer: 'Your audio files should be in WAV or FLAC format with a minimum sample rate of 44.1kHz and a bit depth of 16-bit. This ensures the highest quality for distribution across streaming platforms.' 
  },
  { 
    question: 'How do I choose a song snippet for TikTok and SmartLinks?', 
    answer: 'You can choose a song snippet by specifying the start and end times during the upload process on the Release Builder. This snippet will be used for TikTok and other platforms that support SmartLinks.' 
  },
  { 
    question: 'Can I add credits to my releases?', 
    answer: 'Yes, you can add credits to your releases by filling in the appropriate fields for songwriters, producers, and other contributors in the Release Builder.' 
  },
  { 
    question: 'Can I add lyrics to my release?', 
    answer: 'Yes, you can add lyrics to your release by entering them in the designated lyrics section during the release process. This can help with synchronization on platforms that support lyrics display.' 
  },
  { 
    question: 'Can I upload the same track on multiple releases?', 
    answer: 'Yes, you can upload the same track on multiple releases, such as including it in both a single and an album. Just make sure to use the same ISRC code to avoid duplication on streaming platforms.' 
  },
  { 
    question: 'Can I re-release music I’ve already released with YCE?', 
    answer: 'Yes, you can re-release music you’ve previously distributed with YCE. However, if you’re making significant changes, such as new artwork or remastering, it may be considered a new release.' 
  },
  { 
    question: 'Can I add my lyrics to Instagram?', 
    answer: 'Yes, you can add your lyrics to Instagram by ensuring they are included during the release process. Your lyrics will then be available for platforms that support lyric integration, including Instagram Stories.' 
  },
  { 
    question: 'How to send large files to YCE Music', 
    answer: 'To send large files to YCE Music, you can use a file-sharing service like WeTransfer, Dropbox, or Google Drive. Ensure that the files are properly labeled and include your contact information for reference.' 
  },
  { 
    question: 'How do I find my Amazon Music Artist ID?', 
    answer: 'You can find your Amazon Music Artist ID by searching for your artist profile on Amazon Music. The ID is typically found in the URL of your artist page.' 
  },
  { 
    question: 'How do I find my Audiomack Artist ID?', 
    answer: 'You can find your Audiomack Artist ID by logging into your Audiomack account and navigating to your artist profile. The ID will be in the URL of your profile page.' 
  },
];

export default UploadComponent;
