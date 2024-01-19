import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-5 text-center">
        <h1 className="text-3xl text-blue-800 font-bold mb-2">Contact</h1>
        <p className="text-xl">
          Email me at <a href="mailto:Danish@videnstrategy.com" className="text-blue-600">Danish@videnstrategy.com</a>
        </p>
        <Image
            src="/danishpic1.jpeg" // Path to your image
            alt="selfie"
            layout="responsive"
            width={300} // these dimensions are used to calculate the aspect ratio of the image
            height={200}
            objectFit="contain" // this prop is used to resize and position the image within its box
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-5" // Add margin-bottom to create space between image and h1
          />
      </main>
    </div>
  );
};

export default Contact;
