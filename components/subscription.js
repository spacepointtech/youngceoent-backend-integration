'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic'; // Dynamically load components
import { useRouter } from 'next/router';
import '@/app/style.css';

const SubscriptionPage = () => {
  // const router = useRouter(); // Initialize router at the top level
  const [isClient, setIsClient] = useState(false);
   // Slider now starts from 5 artists
  const [labelArtists, setLabelArtists] = useState(5);
   // Base price for 5 artists
  const [labelPrice, setLabelPrice] = useState(4001); 
  useEffect(() => {
    // Ensure the component is mounted on the client
    setIsClient(true);
  }, []);
    // Handle label plan price update based on slider value
  const handleArtistSlider = (e) => {
    const numberOfArtists = parseInt(e.target.value);
    setLabelArtists(numberOfArtists);
    // Adjusted price calculation for artists from 5 to 40
    setLabelPrice(4001 + (numberOfArtists - 5) * 500); 
  };

  const handlePayment = async (plan) => {
    if (typeof window !== 'undefined') {
      // Dynamically load the Razorpay script
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        const options = {
          key: 'rzp_test_X1UAp9czS3Iou5', // Replace with your Razorpay key
          amount: plan.amount, // Amount in paise
          currency: 'INR',
          name: 'Young CEO Entertainment',
          description: `${plan.name} Subscription Payment`,
          handler: async function (response) {
            // Call backend to verify payment and update subscription
            const res = await fetch('/api/payment-verification', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                signature: response.razorpay_signature,
                plan: plan.name,
              }),
            });

            const result = await res.json();

            if (result.success) {
              // Redirect to login page after successful payment
              router.push('/login');
            } else {
              console.error('Payment verification failed:', result.error);
            }
          },
          prefill: {
            name: 'Yash Wamane',
            email: 'connectwithyceyash@gmail.com',
          },
          theme: {
            color: '#000000',
          },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      };
      script.onerror = () => {
        console.error('Failed to load Razorpay SDK');
      };
      document.body.appendChild(script);
    }
  };

  // if (!isClient) {
  //   return null; // Prevent rendering on the server side
  // }

  return (
    <div className="relative min-h-screen bg-black bg-opacity-40 font-poppins">
      <Image src="/images/logo.png" alt="Young CEO Entertainment" width={100} height={100} />
      <div className="absolute top-[120px] w-full h-[calc(100%-320px)]">
        <Image
          src="/images/subsback.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="opacity-90"
        />
      </div>
        
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="text-white mt-10 space-y-6">
          <div className="flex space-x-6">
            {/* Independent Artist Plan Box */}
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[350px]">
              <div>
                <h2 className="text-xl font-bold">Independent Artist</h2>
                <p className="text-4xl font-semibold mt-5">₹ 1001 / Year</p>
                <p className="text-sm text-opacity-5 mt-5">₹ 83.41 / Month</p>
                <p className="text-sm text-opacity-50 mt-8">(This plan is only available on an annual subscription basis)</p>
                <hr className="my-4 border-t border-gray-500 opacity-50" />
                <div className="space-y-2">
                  <p>Upload Unlimited Songs and Lyrics</p>
                  <p>Spotify Verification</p>
                  <p>Create royalty splits</p>
                  <p>Access to 21 free tools</p>
                  <p>IPhone app Access</p>
                  <p>Synced Lyrics in Apple Music</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-white text-black py-2 px-6 rounded-full"
                  onClick={() => handlePayment({ name: 'Independent Artist', amount: 100100 })}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Independent Duo Plan Box */}
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[350px]">
              <div>
                <h2 className="text-xl font-bold">Independent Duo</h2>
                <p className="text-4xl font-semibold mt-5">₹ 2001 / Year</p>
                <p className="text-sm text-opacity-5 mt-5">₹ 166.75 / Month</p>
                <p className="text-sm text-opacity-5 mt-8">(This plan is only available on an annual subscription basis)</p>
                <hr className="my-4 border-t border-gray-500 opacity-50 mt-5" />
                <div className="space-y-2">
                  <p>Upload Unlimited Songs and Lyrics</p>
                  <p>Spotify Verification</p>
                  <p>Create royalty splits</p>
                  <p>Access to 21 free tools</p>
                  <p>IPhone app Access</p>
                  <p>Synced Lyrics in Apple Music</p>
                  <p>Daily Streaming Stats</p>
                  <p>Customized Label Name</p>
                  <p>Release date and iTunes pricing</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-white text-black py-2 px-6 rounded-full"
                  onClick={() => handlePayment({ name: 'Independent Duo', amount: 200100 })}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Label Plan Box with Slider */}
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[350px]">
              <h2 className="text-xl font-bold">Independent Label Plan</h2>
              <p className="text-4xl font-semibold mt-5">₹ {labelPrice} / Year</p>
              <p className="text-sm text-opacity-50 mt-5">₹ {(labelPrice / 12).toFixed(2)} / Month</p>
              <div className="flex justify-between items-center mt-1">
                <span>{labelArtists}</span>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={labelArtists}
                  onChange={handleArtistSlider}
                  className="slider w-[275px]"
                  style={{ 
                    WebkitAppearance: 'none', 
                    appearance: 'none', // For Firefox
                    backgroundColor: 'white', // Set background to white
                    height: '8px', // Set the height of the slider track
                    borderRadius: '5px' // Make it rounded
                  }}
                />
              </div>

              <p className="text-sm text-opacity-50 mt-3">(This plan is available on an annual subscription basis)</p>
              <hr className="my-4 border-t border-gray-500 opacity-50 mt-5" />

              {/* Slider for number of artists */}
              
              <div className="space-y-2 mt-4">
                <p>Upload Unlimited Songs and Lyrics</p>
                <p>Spotify Verification</p>
                <p>Create royalty splits</p>
                <p>Access to 21 free tools</p>
                <p>IPhone app Access</p>
                <p>Synced Lyrics in Apple Music</p>
                <p>Daily Streaming Stats</p>
                <p>Customized Label Name</p>
                <p>Release date and iTunes pricing</p>
                <p>1TB File Sharing</p>
                <p>RIAA Gold & Platinum Monitoring</p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-white text-black py-2 px-6 rounded-full"
                  onClick={() => handlePayment({ name: 'Label', amount: labelPrice * 100 })}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Single Track Plan Box */}
          <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] mt-10 w-full text-left">
            <h2 className="text-xl font-bold">Want to Distribute a Single Track?</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm mt-10">Upload one song to major platforms for just ₹399</p>
                <p className="text-xs text-opacity-10 mt-3">(Note: This plan does not include access to the dashboard)</p>
              </div>
              <button
                className="bg-white text-black py-2 px-4 rounded-full"
                onClick={() => handlePayment({ name: 'Single Track', amount: 39900 })}
              >
                Pay ₹399 Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

// Dynamically import the SubscriptionPage component to disable SSR
export default dynamic(() => Promise.resolve(SubscriptionPage), { ssr: false });