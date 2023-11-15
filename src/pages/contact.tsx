import React from 'react';
import Navbar from '../components/Navbar';

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="text-xl">
          Email me at <a href="mailto:Danish@videnstrategy.com" className="text-blue-600">Danish@videnstrategy.com</a>
        </p>
      </main>
    </div>
  );
};

export default Contact;
