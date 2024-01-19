import Navbar from '../components/Navbar';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* Pixel-inspired section */}
      <section className="bg-blue-100">
        <div className="container mx-auto px-4 py-1 text-center"> {/* Reduce vertical padding */}
          <Image
            src="/Viden Banner_transparent.png" // Path to your image
            alt="Banner"
            layout="responsive"
            width={500} // these dimensions are used to calculate the aspect ratio of the image
            height={300}
            objectFit="contain" // this prop is used to resize and position the image within its box
            className="mb-1" // Add margin-bottom to create space between image and h1
          />
          <h1 className="text-4xl font-bold text-gray-800">Insight into the modern business</h1>
          <p className="text-xl text-gray-500 mt-4">
            Discover more about me, Viden Strategy, read my posts, try my apps, or get in touch.
            
      
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;