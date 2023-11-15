import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">


      <div className="container mx-auto flex justify-center space-x-4">
        <Link href="/" passHref className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" passHref className="hover:text-gray-300">
          About
        </Link>
        <Link href="/blog" passHref className="hover:text-gray-300">
          Blog
        </Link>
        <Link href="/contact" passHref className="hover:text-gray-300">
          Contact
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;