import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import ReactGA from 'react-ga';
import HubspotScript from '../components/HubspotScript';

// For Google Analytics
const trackingId = "G-X9TQKJ8Q0J"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';

const Home: React.FC = () => {
  return (
    <>
      <Analytics />
      <HubspotScript />

      <Hero />
      <ValueProps />

      {/* Call to Action Section */}
      <section className="bg-brand-navy py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to make better decisions?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Schedule a free introductory strategy session to see how we can help you grow.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-white transition-colors duration-300 shadow-lg">
            Let&apos;s Talk Strategy
          </Link>
        </div>
      </section>
    </>
  );
};


export default Home;
