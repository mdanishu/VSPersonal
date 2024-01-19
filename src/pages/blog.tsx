import Navbar from '../components/Navbar';
import React from 'react';
import Image from 'next/image';

const Blog: React.FC = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="container mx-auto py-5">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-58">Blog</h1>
        <div className="text-center p-5">
          <p className="text-xl mb-4">
            Substack and X are where I will post my analysis and opinions.
          </p>
          <br></br>
          <div className="space-x-4 mb-8">
            {/* External links do not use the Link component */}
            <a href="https://viden.substack.com/" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-md text-sm font-medium">Go to Substack</a>
            <a href="https://x.com/videndanish" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-md text-sm font-medium">Go to X</a>
          </div>
          <div>
          <Image
            src="/videnpicgen1.jpeg" // Path to your image
            alt="pic"
            layout="responsive"
            width={500} // these dimensions are used to calculate the aspect ratio of the image
            height={500}
            objectFit="cover" // this prop is used to resize and position the image within its box
            className="mt-10 bg-transparent" // Add margin-bottom to create space between image and h1
          />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
