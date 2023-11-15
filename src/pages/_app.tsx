import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
        {/* Add other head tags like meta tags here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
