import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* Pixel-inspired section */}
      <section className="bg-blue-100">
        <div className="container mx-auto px-4 py-20 text-left">
          <h1 className="text-5xl font-bold text-gray-800">Welcome to My Personal Website.</h1>
          <p className="text-xl text-gray-500 mt-4">
          Discover more about me, read my blog, or get in touch.
          </p>
          {/* <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6">
            Go to X
          </button> */}
          <a href="https://x.com/videndanish" target="_blank" rel="noopener noreferrer" 
             className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Go to X
          </a>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
