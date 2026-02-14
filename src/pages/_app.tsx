import { motion, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Viden Strategy | Data-Driven Growth & Strategy</title>
        <meta name="description" content="Expert decision support for small businesses and investors. Fractional Strategy Officer, Custom Data Products, and Investment Research." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Viden Strategy | Data-Driven Growth" />
        <meta property="og:description" content="Stop Guessing. Start Growing. Specialized intelligence for decision-makers." />
        <meta property="og:image" content="/Viden Banner_transparent.png" />
        <meta property="og:url" content="https://www.videnstrategy.com/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@videndanish" />
        <meta name="twitter:title" content="Viden Strategy" />
        <meta name="twitter:description" content="Data-driven strategy for small businesses and investors." />
        <meta name="twitter:image" content="/Viden Banner_transparent.png" />

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.route}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;