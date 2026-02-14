import React from 'react';
import Image from 'next/image';
import ContactForm from '../components/ContactForm'; // Assuming ContactForm is in components

const Contact: React.FC = () => {
  return (
    <main className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row gap-12">

        {/* Contact Info Side */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-brand-navy font-serif mb-6">Partner With Us.</h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to upgrade your decision-making process? Schedule a consultation to discuss your specific needs.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <span className="text-2xl mr-4">📧</span>
              <div>
                <h3 className="font-bold text-brand-navy">Email</h3>
                <a href="mailto:Danish@videnstrategy.com" className="text-brand-blue hover:underline">Danish@videnstrategy.com</a>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-2xl mr-4">💼</span>
              <div>
                <h3 className="font-bold text-brand-navy">Connect</h3>
                <a href="https://www.linkedin.com/in/mohammad-danish-uddin/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">LinkedIn Profile</a>
              </div>
            </div>
          </div>

          <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
            {/* Reusing the selfie or another image to add personality/trust */}
            <Image
              src="/danishpic1.jpeg"
              alt="Danish"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="w-full md:w-1/2">
          <div className="bg-brand-cream p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>

      </div>
    </main>
  );
};

export default Contact;
