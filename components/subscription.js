// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import Script from 'next/script';

// const SubscriptionPage = () => {
  
//   // Function to handle the payment process
//   const handlePayment = async () => {
//     if (typeof window !== 'undefined' && window.Razorpay) {
//       const options = {
//         key: 'rzp_test_X1UAp9czS3Iou5', // Replace with your Razorpay key
//         amount: paymentAmount, // Amount in paise
//         currency: 'INR',
//         name: 'Young CEO Entertainment',
//         description: 'Subscription Payment',
//         order_id: orderId, // Generated order ID from backend
//         handler: function (response) {
//           // Handle the successful payment here
//           console.log(response);
//         },
//         prefill: {
//           name: 'Yash Wamane',
//           email: 'connectwithyceyash@gmail.com',
//         },
//         theme: {
//           color: '#F37254',
//         },
//       };
  
//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } else {
//       console.error('Razorpay SDK is not loaded.');
//     }
//   };
  
//   return (
//     <div className="relative min-h-screen bg-black bg-opacity-40 font-poppins">
//       <Image src="/images/logo.png" alt="Young CEO Entertainment" width={100} height={100} />
//       <div className="absolute top-[120px] w-full h-[calc(100%-320px)]">
//         <Image
//           src="/images/subsback.png"
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           objectPosition="top"
//           className="opacity-90"
//         />
//       </div>
      
//       <div className="relative z-10 flex flex-col items-center justify-center">
//         <div className="text-white mt-10 space-y-6">
//           <div className="flex space-x-6">
//             {/* Independent Artist Plan Box */}
//             <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between">
//               <div>
//                 <h2 className="text-xl font-bold">Independent Artist</h2>
//                 <p className="text-4xl font-semibold">₹ 1001 / Year</p>
//                 <p className="text-sm text-opacity-50">₹ 83.41 / Month</p>
//                 <p className="text-sm text-opacity-50">(This plan is only available on an annual subscription basis)</p>
//                 <hr className="my-4 border-t border-gray-500 opacity-50" />
//                 <div className="space-y-2">
//                   <p>Upload Unlimited Songs and Lyrics</p>
//                   <p>Spotify Verification</p>
//                   <p>Create royalty splits</p>
//                   <p>Access to 21 free tools</p>
//                   <p>IPhone app Access</p>
//                   <p>Synced Lyrics in Apple Music</p>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4">
//                 <button
//                   className="bg-white text-black py-2 px-6 rounded-full"
//                   onClick={() => handlePayment({name: 'Independent Artist', amount: 100100})}
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </div>

//             {/* Independent Duo Plan Box */}
//             <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between">
//               <div>
//                 <h2 className="text-xl font-bold">Independent Duo</h2>
//                 <p className="text-4xl font-semibold">₹ 2001 / Year</p>
//                 <p className="text-sm text-opacity-5">₹ 166.75 / Month</p>
//                 <p className="text-sm text-opacity-5">(This plan is only available on an annual subscription basis)</p>
//                 <hr className="my-4 border-t border-gray-500 opacity-50" />
//                 <div className="space-y-2">
//                   <p>Upload Unlimited Songs and Lyrics</p>
//                   <p>Spotify Verification</p>
//                   <p>Create royalty splits</p>
//                   <p>Access to 21 free tools</p>
//                   <p>IPhone app Access</p>
//                   <p>Synced Lyrics in Apple Music</p>
//                   <p>Daily Streaming Stats</p>
//                   <p>Customized Label Name</p>
//                   <p>Release date and iTunes pricing</p>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4">
//                 <button
//                   className="bg-white text-black py-2 px-6 rounded-full"
//                   onClick={() => handlePayment({name: 'Independent Duo', amount: 200100})}
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </div>

//             {/* Label Plan Box */}
//             <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between">
//               <div>
//                 <h2 className="text-xl font-bold">Label</h2>
//                 <p className="text-4xl font-semibold">₹ 7343 / Year</p>
//                 <p className="text-sm text-opacity-10">₹ 611.91 / Month</p>
//                 <p className="text-sm text-opacity-10">(This plan is only available on an annual subscription basis)</p>
//                 <hr className="my-4 border-t border-gray-500 opacity-50" />
//                 <div className="space-y-2">
//                   <p>Upload Unlimited Songs and Lyrics</p>
//                   <p>Spotify Verification</p>
//                   <p>Create royalty splits</p>
//                   <p>Access to 21 free tools</p>
//                   <p>IPhone app Access</p>
//                   <p>Synced Lyrics in Apple Music</p>
//                   <p>Daily Streaming Stats</p>
//                   <p>Customized Label Name</p>
//                   <p>Release date and iTunes pricing</p>
//                   <p>1TB File Sharing</p>
//                   <p>RIAA Gold</p>
//                   <p>Platinum Monitoring</p>
//                 </div>
//               </div>
//               <div className="flex justify-center mt-4">
//                 <button
//                   className="bg-white text-black py-2 px-6 rounded-full"
//                   onClick={() => handlePayment({name: 'Label', amount: 734300})}
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Single Track Plan Box */}
//           <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] mt-10 w-[1340px] text-left">
//             <h2 className="text-xl font-bold">Want to Distribute a Single Track?</h2>
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-sm">Upload one song to major platforms for just ₹399</p>
//                 <p className="text-xs text-opacity-50">(Note: This plan does not include access to the dashboard)</p>
//               </div>
//               <button
//                 className="bg-white text-black py-2 px-4 rounded-full"
//                 onClick={() => handlePayment({name: 'Single Track', amount: 39900})}
//               >
//                 Distribute Your Track
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionPage;



// script added 
'use client';
import React from 'react';
import Image from 'next/image';

const SubscriptionPage = () => {
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
          handler: function (response) {
            console.log(response); // Handle successful payment
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
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">Independent Artist</h2>
                <p className="text-4xl font-semibold">₹ 1001 / Year</p>
                <p className="text-sm text-opacity-50">₹ 83.41 / Month</p>
                <p className="text-sm text-opacity-50">(This plan is only available on an annual subscription basis)</p>
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
                  onClick={() => handlePayment({name: 'Independent Artist', amount: 100100})}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Independent Duo Plan Box */}
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">Independent Duo</h2>
                <p className="text-4xl font-semibold">₹ 2001 / Year</p>
                <p className="text-sm text-opacity-5">₹ 166.75 / Month</p>
                <p className="text-sm text-opacity-5">(This plan is only available on an annual subscription basis)</p>
                <hr className="my-4 border-t border-gray-500 opacity-50" />
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
                  onClick={() => handlePayment({name: 'Independent Duo', amount: 200100})}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Label Plan Box */}
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">Label</h2>
                <p className="text-4xl font-semibold">₹ 7343 / Year</p>
                <p className="text-sm text-opacity-10">₹ 611.91 / Month</p>
                <p className="text-sm text-opacity-10">(This plan is only available on an annual subscription basis)</p>
                <hr className="my-4 border-t border-gray-500 opacity-50" />
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
                  <p>1TB File Sharing</p>
                  <p>RIAA Gold</p>
                  <p>Platinum Monitoring</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-white text-black py-2 px-6 rounded-full"
                  onClick={() => handlePayment({name: 'Label', amount: 734300})}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Single Track Plan Box */}
          <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] mt-10 w-[1340px] text-left">
            <h2 className="text-xl font-bold">Want to Distribute a Single Track?</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Upload one song to major platforms for just ₹399</p>
                <p className="text-xs text-opacity-50">(Note: This plan does not include access to the dashboard)</p>
              </div>
              <button
                className="bg-white text-black py-2 px-4 rounded-full"
                onClick={() => handlePayment({name: 'Single Track', amount: 39900})}
              >
                Distribute Your Track
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
