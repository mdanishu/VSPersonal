import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Construct mailto link
        const subject = `New Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage:%0D%0A${formData.message}`;
        const mailtoLink = `mailto:Danish@videnstrategy.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form after a short delay to allow the mailto to trigger
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            {status === 'success' ? (
                <div className="text-center py-10">
                    <div className="text-brand-gold text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thanks for reaching out. I'll get back to you shortly.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-brand-blue hover:underline">Send another message</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                            placeholder="you@company.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold"
                            placeholder="Tell me about your project or challenge..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`w-full py-3 px-6 rounded-md font-bold text-white transition-colors duration-300 ${status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-navy hover:bg-brand-gold hover:text-brand-navy'}`}
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
