import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto text-center py-5 px-3 sm:px-0">
        <h1 className="text-4xl font-bold text-blue-800">About Me</h1>
        <div className="mt-6 text-gray-600">
          <p className="text-lg">
          My name is Danish, founder of Viden Strategy.
          </p>
          <p className="text-lg mt-4">
          I went to business school at Rice University and built equity analysis skills in the Wright Fund. I also built biotech consulting skills in an accelerator in the Texas Medical Center. 
          </p>
          <p className="text-lg mt-4">
          I have worked in science for over 10 years, the first 8 were at an academic research institution in a variety of roles including mouse models in neuroscience, regulatory affairs for pediatric oncology, and internal consulting for both the clinical and research divisions. I have 5 years of clinical research experience and do planning and strategy for a biotech.

          </p>
        
        </div>
      </main>
    </>
  );
};

export default About;
