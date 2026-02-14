import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
    return (
        <div className="bg-brand-navy text-white relative overflow-hidden">
            {/* Background decoration (optional) */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-blue opacity-10 blur-3xl"></div>

            <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center">

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-6">
                        Stop Guessing. <br />
                        <span className="text-brand-gold">Start Growing.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                        Precision strategy for the information age. We transform complex data into high-conviction decisions for investors and business leaders.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link href="/services" className="px-8 py-3 bg-brand-gold text-brand-navy font-bold rounded hover:bg-white transition-colors duration-300">
                            View Services
                        </Link>
                        <Link href="/contact" className="px-8 py-3 border border-gray-400 text-white font-bold rounded hover:border-brand-gold hover:text-brand-gold transition-colors duration-300">
                            Book Consultation
                        </Link>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center z-10">
                    {/* Using a placeholder or existing image for now. Reusing videnpicgen1 or similar if pertinent, or a generic abstract. 
                For now, let's use the transparent banner if it fits, or the profile pic, 
                but ideally we want something more 'abstract strategy'. 
                Since I don't have a new image, I'll use the transparent banner but styled better, 
                OR just a clean layout without a specific image if none fit.
                Let's try the Viden Banner_transparent.png as it was used before.
             */}
                    <div className="relative w-full max-w-md h-64 md:h-96">
                        <Image
                            src="/Viden Banner_transparent.png"
                            alt="Viden Strategy Analysis"
                            fill
                            className="object-contain filter invert brightness-0"
                            priority
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
