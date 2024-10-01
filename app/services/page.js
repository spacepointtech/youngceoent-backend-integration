
import Image from 'next/image'
import '@/app/style.css'

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen w-full text-white font-poppins">
      {/* Background Image */}
      <div className="relative w-full top-100 h-[544px] pt-16">
        <Image
          src="/images/vector1.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="relative"
        />
      </div>

      {/* Our Services Section */}
      <div className="absolute top-1/4 left-0 transform -translate-y-1/2 w-full p-10"> 
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-2 text-lg text-justify opacity-70">
          At Young CEO Entertainment, we are dedicated to empowering artists by providing top-tier music distribution and promotional services. Our mission is to help you reach global audiences through innovative solutions and partnerships with major streaming platforms.
        </p>
      </div>

      {/* Content Section */}
      <div className="pt-40 space-y-24 px-10">
        {/* Global Music Distribution */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
               
            <h2 className="text-3xl font-semibold">Global Music Distribution</h2>
            <p className="mt-4 text-lg text-justify">
              We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms, including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.
            </p>
          </div>
          <div className="md:w-1/2 bg-[#0F0F0F] rounded-lg p-6 h-[500px]">
          <Image
              src="/images/globe.png"
              alt="globe"
              width={599}
              height={575}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Artist Dashboard */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 bg-[#0F0F0F] rounded-lg p-6">
            
            <Image
              src="/images/dashboard.png"
              alt="Artist Dashboard"
              width={599}
              height={575}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold">Artist Dashboard</h2>
            <p className="mt-4 text-lg text-justify">
            Our artist dashboard is all-in-one platform that gives artists complete control over their music distribution, performance analytics, and promotion. With a user-friendly interface, artists can easily upload and organize their music, manage metadata, and schedule releases across major streaming platforms. It provides real-time insights into listener demographics, geographical data, and streaming performance, helping artists understand their audience and make informed decisions. The dashboard also offers transparent revenue and royalty tracking, ensuring artists can monitor their earnings efficiently.
            </p>
          </div>
        </div>

        {/* Revenue Tracking */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold">Revenue Tracking</h2>
            <p className="mt-4 text-lg text-justify">
              We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms, including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.
            </p>
          </div>
          <div className="md:w-1/2 bg-[#0F0F0F] rounded-lg p-6">
            
            <Image
              src="/images/revenue.png"
              alt="Revenue Tracking"
              width={599}
              height={457}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* 24/7 Artist Support */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 bg-[#0F0F0F] rounded-lg p-6 h-[500px]">
          <Image
              src="/images/supservice.png"
              alt="24 X 7"
              width={599}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold">24/7 Artist Support</h2>
            <p className="mt-4 text-lg text-justify">
              Our dedicated team is always here to support you throughout your musical journey. Whether you need assistance with distribution, marketing, or anything in between, we are just a message away to provide the help you need.
            </p>
          </div>
        </div>

        <div className="h-20"></div>
      </div>
    </div>
  )
}
