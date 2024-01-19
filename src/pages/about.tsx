import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto text-center py-3 px-3 sm:px-0">
        <h1 className="text-4xl font-bold text-blue-800">About Me</h1>
        <div className="mt-3 text-gray-600">
          <p className="text-lg">
          My name is Danish, founder of Viden Strategy.
          </p>
          <p className="text-lg mt-4">
          I went to business school at Rice University and built equity analysis skills in the Wright Fund. 
          I also built biotech consulting skills in an accelerator in the Texas Medical Center. 
          </p>
          <p className="text-lg mt-4">
          I have worked in science for over 10 years, the first 8 were at an academic 
          research institution in a variety of roles including mouse models in neuroscience, 
          regulatory affairs for pediatric oncology, and internal consulting for both the clinical 
          and research divisions. I have 5 years of clinical research experience and do planning and 
          strategy for a biotech. I am an active public and private investor since 2016, utilizing a variety of strategies.

          </p>
        
        </div>

        <h1 className="text-4xl font-bold text-blue-800 mt-5">About Viden Strategy</h1>
        <div className="mt-3 text-gray-600">
          <p className="text-lg mt-4">
          Viden Strategy's mission is to use data to help businesses make strategic decisions</p>
          <p className="text-lg mt-4">
          Viden Strategy is my way of using my experience and skills to empower others. Simultaneously, I continue to exercise, build, and improve my skills. So it is a win win!

          </p>
         <p className="text-lg mt-4">
          I will post analysis write ups, audio, and video to various channels like X, Substack, and YouTube. I will also create apps for people to use to explore data of interest. I provide consulting services for small businesses and individuals.          
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
