import Navbar from '../components/Navbar';
import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-58">Blog</h1>
        <div className="text-center p-10">
          <p className="text-xl mb-4">
            Substack and X are where I will post my analysis and opinions.
          </p>
          <div className="space-x-4 mb-8">
            {/* External links do not use the Link component */}
            <a href="https://viden.substack.com/" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-md text-sm font-medium">Go to Substack</a>
            <a href="https://x.com/videndanish" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-md text-sm font-medium">Go to X</a>
          </div>
          <div>
           
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
