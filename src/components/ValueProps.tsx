import React from 'react';
import { FaChartLine, FaLightbulb, FaShieldAlt } from 'react-icons/fa'; // Placeholder icons text if lib missing.
// Checking earlier: react-icons might not be there. I will use simple SVG icons or just text/emoji if needed to be safe.
// To ensure it works without 'react-icons' install, I will use SVGs directly.

const ValueProps: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-serif mb-4">The Viden Advantage</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        In a world of noise, we provide the signal. Specialized intelligence for forward-thinking decision makers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 rounded-lg bg-brand-cream border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">Eliminate Intuition Bias</h3>
                        <p className="text-gray-600">
                            Move beyond "gut feeling". We deploy rigorous data analysis and visualization to reveal the true state of your business and market.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-lg bg-brand-cream border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">Asymmetric Upside</h3>
                        <p className="text-gray-600">
                            Unlock hidden opportunities. Our strategies are designed to systematically identify growth levers and rapid improvement paths.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-lg bg-brand-cream border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">Tail Risk Mitigation</h3>
                        <p className="text-gray-600">
                            Protect your downside. We apply scientific rigor and due diligence frameworks to validate assumptions before you invest capital.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProps;
