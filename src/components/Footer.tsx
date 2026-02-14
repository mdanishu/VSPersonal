import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Assuming we can use react-icons, if not will use text
// If react-icons is not installed, I will simply use text for now to avoid install steps if not needed yet. 
// Checking package.json... I didn't see react-icons. I'll use text or simple SVGs for now or just text links.
// Let's stick to text for simplicity and speed.

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-navy text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold font-serif text-white">Viden Strategy</h3>
                    <p className="text-sm text-gray-400">Data. Strategy. Growth.</p>
                </div>

                <div className="flex space-x-6 mb-4 md:mb-0">
                    <Link href="/services" className="hover:text-brand-gold transition-colors">Services</Link>
                    <Link href="/insights" className="hover:text-brand-gold transition-colors">Insights</Link>
                    <Link href="/about" className="hover:text-brand-gold transition-colors">About</Link>
                    <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy</Link>
                </div>

                <div className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Viden Strategy. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
