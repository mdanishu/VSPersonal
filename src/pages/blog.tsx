import Navbar from '../components/Navbar';
import React from 'react';
import Image from 'next/image';
import HubspotScript from '../components/HubspotScript'; // Import the HubSpot script component


const Blog: React.FC = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <HubspotScript /> {/* Include the HubSpot script component */}
      <main className="container mx-auto py-5">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-58">Links</h1>
        <div className="text-center p-3">
          <p className="text-xl mb-4">
            X and Substack are where I will post my analysis and opinions. I will be updating various apps to explore data as well.
          </p>
          <br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 mb-8">
  {/* External links do not use the Link component */}
  <a href="https://x.com/videndanish" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-green-800"> X</a>
  <a href="https://viden.substack.com/" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-green-800"> Substack</a>
  <a href="https://viden.shinyapps.io/shinyviden1/" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-green-800">Shiny App</a>
  <a href="https://litviden.streamlit.app/" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-green-800"> Streamlit App</a>
  <a href="https://www.linkedin.com/in/mohammad-danish-uddin/" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-green-800"> Linkedin</a>

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
