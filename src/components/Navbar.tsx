import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-brand-navy text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo/Text */}
        <Link href="/" className="text-2xl font-bold font-serif tracking-tight text-white hover:text-brand-gold transition-colors">
          Viden Strategy
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/services" className="font-medium hover:text-brand-gold transition-colors">Services</Link>
          <Link href="/insights" className="font-medium hover:text-brand-gold transition-colors">Insights</Link>
          <Link href="/about" className="font-medium hover:text-brand-gold transition-colors">About</Link>
          <Link href="/contact" className="px-5 py-2 bg-brand-gold text-brand-navy font-bold rounded hover:bg-white transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button (Simple Placeholder for now) */}
        <div className="md:hidden">
          {/* Future: Add hamburger menu here */}
          <Link href="/contact" className="text-sm font-bold text-brand-gold">Menu</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;