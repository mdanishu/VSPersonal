import React from 'react';
import Image from 'next/image';



const About: React.FC = () => {
  return (
    <main className="container mx-auto py-16 px-4">
      {/* Bio Section */}
      <div className="flex flex-col md:flex-row items-center mb-20">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
          {/* Placeholder for a better professional headshot if available, reusing existing for now but styled */}
          <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-brand-gold shadow-xl">
            {/* Note: Using existing image path, assuming it exists based on previous file content */}
            <Image
              src="/videnpicgen1.jpeg"
              alt="Danish - Founder Viden Strategy"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-brand-navy font-serif mb-6">Where Scientific Rigor Meets Commercial Strategy.</h1>
          <p className="text-lg text-gray-600 mb-6">
            I founded Viden Strategy on a core belief: the best business decisions are born from the intersection of the scientific method and commercial strategy.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With over 10 years in scientific research—spanning neuroscience to pediatric oncology—I learned to navigate complex, ambiguous systems.
            Combined with my MBA from Rice University and experience in Venture Capital and Biotech Consulting, I now help business leaders
            mitigate risk and accelerate growth through data.
          </p>
        </div>
      </div>

      {/* Trust Markers / Stats */}
      <div className="bg-brand-cream rounded-xl p-10 mb-20 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-brand-gold mb-2">10+</h3>
            <p className="font-semibold text-brand-navy">Years in Scientific Research</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-brand-gold mb-2">MBA</h3>
            <p className="font-semibold text-brand-navy">Rice University</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-brand-gold mb-2">Active</h3>
            <p className="font-semibold text-brand-navy">Public & Private Investor</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-brand-navy font-serif mb-6">About Viden Strategy</h2>
        <p className="text-lg text-gray-600 mb-8">
          Viden Strategy is more than a consultancy; it's a partner in your growth.
          Our mission is to empower small businesses and individuals with the same level of strategic insight usually reserved for Fortune 500 companies.
        </p>
        <p className="text-lg text-gray-600">
          Whether through fractional strategy support, custom data products, or deep-dive investment research,
          we are dedicated to turning information into your competitive advantage.
        </p>
      </div>
    </main>
  );
};

export default About;
