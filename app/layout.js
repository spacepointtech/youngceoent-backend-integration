'use client'; // Needed for client-side hooks
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';

export default function Layout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Hide Navbar on the login/signup/reset page
  const hideNavbar = pathname === '/login' || pathname === '/signup' || pathname === '/reset' 
  || pathname === '/dashboard' || pathname === '/dashboard/question1' || pathname === '/dashboard/question2' 
  || pathname === '/dashboard/question3' || pathname === '/dashboard/question4' 
  || pathname === '/dashboard/question5' || pathname === '/dashboard/question6' 
  || pathname === '/dashboard/question4' || pathname==='/dashboard/rel-quest'
  || pathname==='/dashboard/rel-quest1' || pathname==='/dashboard/rel-quest2'
  || pathname==='/dashboard/rel-quest3' || pathname==='/dashboard/submission'
  || pathname==='/dashboard/settings'   || pathname==='/dashboard/audience'
  || pathname==='/dashboard/audience/segments' || pathname==='/dashboard/audience/location';

  return (
    <html lang="en">
      <head>
        <title>Young CEO Entertainment</title>
        <meta name="Designed & Developed by YCE Tech Team" content="YCE MUSIC DISTRIBUTION" />
      </head>
      <body>
        {!hideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}

