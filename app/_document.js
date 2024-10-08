import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Add Razorpay script here */}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        { /* favicon link*/}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
