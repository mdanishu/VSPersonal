import React from 'react';

const Privacy: React.FC = () => {
    return (
        <>
            <main className="container mx-auto py-16 px-4 max-w-4xl text-gray-700">
                <h1 className="text-4xl font-bold text-brand-navy font-serif mb-8">Privacy Policy</h1>

                <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Introduction</h2>
                    <p>
                        Viden Strategy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Information We Collect</h2>
                    <p className="mb-2">We may collect the following types of information:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Personal Information:</strong> Name, email address, and message content when you voluntarily submit a contact form.</li>
                        <li><strong>Usage Data:</strong> Information on how you interact with our site (e.g., pages visited, time spent) via analytics tools.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">3. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Respond to your inquiries and provide requested services.</li>
                        <li>Improve our website functionality and user experience.</li>
                        <li>Send periodic emails (only if you have opted in).</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Third-Party Services</h2>
                    <p>
                        We use third-party services like Google Analytics and Vercel Analytics to understand website traffic. These services may use cookies to collect data.
                        We do not sell your personal data to advertisers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:Danish@videnstrategy.com" className="text-brand-blue hover:underline">Danish@videnstrategy.com</a>.
                    </p>
                </section>
            </main>        </>
    );
};

export default Privacy;
