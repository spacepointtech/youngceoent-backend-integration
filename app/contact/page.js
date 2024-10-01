// import Image from 'next/image';
// import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

// export default function ContactUs() {
//   return (
//     <div className="font-poppins bg-black text-white">
//       {/* Header Section */}
//       <div className="relative bg-black text-left py-32 px-6">
//         <div className="relative z-10 ml-5">
//           <h1 className="text-4xl font-bold">Contact Us</h1>
//           <p className="text-gray-400 mt-2">
//             We&apos;d love to hear from you! Whether you&apos;re an artist, partner, or customer, feel free to get in touch with us.
//           </p>
//         </div>
//       </div>

//       {/* Contact Form Section */}
//       <div className="relative bg-black py-20 w-85 ml-5">
//         <div className="relative z-10 w-full px-6 max-w-none">
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-2xl opacity-60">Get Started</h2>
//               <p className="text-3xl font-semibold mt-2">
//                 Get in touch with us. We&apos;re ready.
//               </p>
//               <p className="text-3xl font-semibold mt-2">
//                 to support your next move.
//               </p>
//             </div>
//             <div className="mt-[-10px]"> 
//               <Image src="/images/logo.png" alt="Logo" width={200} height={150} />
//             </div>
//           </div>
//           <form className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="bg-transparent border-b-2 border-gray-500 focus:border-white text-white py-3 px-4 focus:outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="bg-transparent border-b-2 border-gray-500 focus:border-white text-white py-3 px-4 focus:outline-none"
//             />
//             <input
//               type="text"
//               placeholder="Phone Number (optional)"
//               className="bg-transparent border-b-2 border-gray-500 focus:border-white text-white py-3 px-4 focus:outline-none"
//             />
//             <textarea
//               placeholder="Message"
//               rows="4"
//               className="bg-transparent border-b-2 border-gray-500 focus:border-white text-white py-3 px-4 focus:outline-none sm:col-span-3"
//             />
//             <button
//               type="submit"
//               className="bg-white text-black py-3 px-6 max-w-xs mx-0 rounded-md hover:bg-gray-300 transition-colors sm:col-span-3 sm:justify-self-start"
//             >
//               Leave us a Message →
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Contact Info Section */}
//       <div className="bg-black py-20 w-full ml-5">
//         <div className="w-full px-6 text-white flex justify-between">
//           <div className="flex-1">
//             <h3 className="text-xl opacity-80">Contact Info</h3>
//             <p className="mt-4">
//               We&apos;re here to support your music journey, every step!
//             </p>
//             <hr className="border-gray-400 my-4" />
//             <p className="mt-4 font-light">
//               <strong>Address</strong>
//               <br />
//               2nd Floor Training Room, Coep Bahu Institute, Wellesley Road,
//               Shivaji Nagar, Pune - 411005
//             </p>
//           </div>

//           <div className="flex-1 ml-52"> 
//             <p className="mt-4 font-light">
//               <strong>Email Address</strong>
//               <br />
//               connectwithus@youngceoentertainment.com
//             </p>
//             <p className="mt-6 font-light">
//               <strong>Contact Number</strong>
//               <br />
//               +91 878 896 9278
//             </p>
//             <div className="flex space-x-6 mt-4">
//               <FaFacebook className="text-2xl" />
//               <FaInstagram className="text-2xl" />
//               <FaTwitter className="text-2xl" />
//               <FaWhatsapp className="text-2xl" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Widgets */}
//       <div className="bg-gray-900 py-20">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8">
//           <div className="grid grid-cols-2 gap-4  md:order-first">
//             <div className="bg-transparent p-4 rounded-lg border-2 border-white flex justify-center">
//               <Image src="/images/user-activity.png" alt="User Activity" width={400} height={200} /> {/* Increased size */}
//             </div>
//             <div className="bg-transparent p-4 rounded-lg border-2 border-white flex justify-center">
//               <Image src="/images/globe.png" alt="Top Countries" width={400} height={200} /> {/* Increased size */}
//             </div>
//             <div className="bg-transparent p-4 rounded-lg border-2 border-white flex justify-center">
//               <Image src="/images/analytics.png" alt="Analytics" width={400} height={200} /> {/* Increased size */}
//             </div>
//             <div className="bg-transparent p-4 rounded-lg border-2 border-white flex justify-center">
//               <Image src="/images/another-image.png" alt="Another Image" width={400} height={200} /> {/* Increased size */}
//             </div>
//           </div>

//           {/* Newsletter Subscription */}
//           <div className="bg-[#EBEBEB] p-8 rounded-lg">
//             <h4 className="text-2xl font-semibold text-black">Subscribe to our Newsletter</h4>
//             <p className="text-gray-700 mt-4">
//               Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.
//             </p>
//             <div className="mt-6 flex justify-center">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500 text-"
//               />
//               <button className="bg-black text-white py-3 px-8 hover:bg-gray-800 transition-colors">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="font-poppins bg-black text-white">
      {/* Header Section */}
      <div className="relative bg-black text-left py-32 px-6">
        <div className="relative z-10 ml-5">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-400 mt-2">
            We&apos;d love to hear from you! Whether you&apos;re an artist, partner, or customer, feel free to get in touch with us.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative bg-black py-20 w-85 ml-5">
        <div className="relative z-10 w-full px-6 max-w-none">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl opacity-60">Get Started</h2>
              <p className="text-3xl font-semibold mt-2">
                Get in touch with us. We&apos;re ready.
              </p>
              <p className="text-3xl font-semibold mt-2">
                to support your next move.
              </p>
            </div>
            <div className="mt-[-10px]"> 
              <Image src="/images/logo.png" alt="Logo" width={200} height={150} />
            </div>
          </div>
          <form className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border-b-2 border-gray-500 focus:border-white text-white py-3 px-4 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-b-2 border-gray-500 focus:border-white text-white py-3 px-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number (optional)"
              className="bg-transparent border-b-2 border-gray-500 focus:border-white text-white py-3 px-4 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="bg-transparent border-b-2 border-gray-500 focus:border-white text-white py-3 px-4 focus:outline-none sm:col-span-3"
            />
            <button
              type="submit"
              className="bg-white text-black py-3 px-6 max-w-xs mx-0 rounded-md hover:bg-gray-300 transition-colors sm:col-span-3 sm:justify-self-start"
            >
              Leave us a Message →
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-black py-20 w-full ml-5">
        <div className="w-full px-6 text-white flex justify-between">
          <div className="flex-1">
            <h3 className="text-xl opacity-80">Contact Info</h3>
            <p className="mt-4">
              We&apos;re here to support your music journey, every step!
            </p>
            <hr className="border-gray-400 my-4" />
            <p className="mt-4 font-light">
              <strong>Address</strong>
              <br />
              2nd Floor Training Room, Coep Bahu Institute, Wellesley Road,
              Shivaji Nagar, Pune - 411005
            </p>
          </div>

          <div className="flex-1 ml-52"> 
            <p className="mt-4 font-light">
              <strong>Email Address</strong>
              <br />
              connectwithus@youngceoentertainment.com
            </p>
            <p className="mt-6 font-light">
              <strong>Contact Number</strong>
              <br />
              +91 878 896 9278
            </p>
            <div className="flex space-x-6 mt-4">
              <FaFacebook className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaTwitter className="text-2xl" />
              <FaWhatsapp className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Widgets */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8">
          <div className="grid grid-cols-2 gap-4 md:order-first">
            <div className="bg-transparent p-4 rounded-lg border-2 border-white">
              <Image src="/images/activity.png" alt="User Activity" width={480} height={240} /> {/* Increased size */}
            </div>
            <div className="bg-transparent p-4 rounded-lg border-2 border-white flex justify-center">
              <Image src="/images/globe.png" alt="Top Countries" width={480} height={240} /> {/* Increased size */}
            </div>
            <div className="bg-transparent p-4 rounded-lg border-2 border-white flex justify-center">
              <Image src="/images/segments.png" alt="Analytics" width={580} height={440} /> {/* Increased size */}
            </div>
            <div className="bg-transparent p-4 rounded-lg border-2 border-white flex justify-center">
              <Image src="/images/clicks.png" alt="Another Image" width={480} height={240} /> {/* Increased size */}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-[#EBEBEB] p-8 rounded-lg">
            <h4 className="text-2xl font-semibold text-black">Subscribe to our Newsletter</h4>
            <p className="text-gray-700 mt-4">
              Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.
            </p>
            <div className="mt-6 flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button className="bg-black text-white py-3 px-8 hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
