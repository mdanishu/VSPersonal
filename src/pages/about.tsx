import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        <div className="mt-6 text-gray-600">
          <p className="text-lg">
            Hi there! I'm [Your Name], a passionate developer and content creator.
          </p>
          <p className="text-lg mt-4">
            I've been working in the tech industry for over [X] years and I specialize in
            creating delightful web experiences with modern technologies.
          </p>
          <p className="text-lg mt-4">
            When I'm not coding, you can find me outdoors hiking, reading a good book,
            or exploring new coffee shops in town.
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
