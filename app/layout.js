'use client'; // Needed for client-side hooks
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';

export default function Layout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Hides Navbar on the these page!
  const hideNavbar = pathname === '/login' || pathname === '/signup' || pathname === '/reset' || pathname === '/dashboard';

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

