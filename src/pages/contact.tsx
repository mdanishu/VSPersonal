import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Contact: React.FC = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Form submission logic (to be implemented)
    console.log('Form submitted with:', { name, email, message });
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Contact</h1>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full mb-4 p-2"
          />

          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-4 p-2"
          />

          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full mb-4 p-2"
            rows={4}
          ></textarea>

          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
