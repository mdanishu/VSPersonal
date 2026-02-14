import React from 'react';

const Insights: React.FC = () => {
    return (
        <>
            <main className="container mx-auto py-16 px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-brand-navy font-serif mb-6">Insights & Resources</h1>
                    <p className="text-xl text-gray-600">
                        Deep dives into strategy, biotech, and market trends. Explore our latest thinking and tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Resource Card 1 - Substack */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                        <div className="h-48 bg-gray-200 relative">
                            {/* Placeholder for real article image */}
                            <div className="absolute inset-0 bg-brand-navy opacity-10 flex items-center justify-center text-4xl">📝</div>
                        </div>
                        <div className="p-6 flex-grow">
                            <div className="text-xs font-bold text-brand-gold uppercase tracking-wide mb-2">Newsletter</div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Viden Strategy Substack</h3>
                            <p className="text-gray-600 mb-4">
                                Regular analysis on market trends, decision frameworks, and the intersection of science and business.
                            </p>
                        </div>
                        <div className="px-6 pb-6 mt-auto">
                            <a href="https://viden.substack.com/" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold hover:text-brand-navy transition-colors">
                                Read on Substack &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Resource Card 2 - Shiny App */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                        <div className="h-48 bg-gray-200 relative">
                            <div className="absolute inset-0 bg-brand-navy opacity-10 flex items-center justify-center text-4xl">📊</div>
                        </div>
                        <div className="p-6 flex-grow">
                            <div className="text-xs font-bold text-brand-gold uppercase tracking-wide mb-2">Data Tool</div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Interactive Data Explorer</h3>
                            <p className="text-gray-600 mb-4">
                                A Shiny app demonstration that allows users to visualize and manipulate complex datasets in real-time.
                            </p>
                        </div>
                        <div className="px-6 pb-6 mt-auto">
                            <a href="https://viden.shinyapps.io/shinyviden1/" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold hover:text-brand-navy transition-colors">
                                Launch App &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Resource Card 3 - Streamlit App */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                        <div className="h-48 bg-gray-200 relative">
                            <div className="absolute inset-0 bg-brand-navy opacity-10 flex items-center justify-center text-4xl">⚡</div>
                        </div>
                        <div className="p-6 flex-grow">
                            <div className="text-xs font-bold text-brand-gold uppercase tracking-wide mb-2">Prototype</div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Streamlit Analytics</h3>
                            <p className="text-gray-600 mb-4">
                                Lightweight, fast analytics dashboard built on Streamlit for quick insights and rapid prototyping.
                            </p>
                        </div>
                        <div className="px-6 pb-6 mt-auto">
                            <a href="https://litviden.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold hover:text-brand-navy transition-colors">
                                View Dashboard &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Resource Card 4 - Social X */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                        <div className="h-48 bg-gray-200 relative">
                            <div className="absolute inset-0 bg-brand-navy opacity-10 flex items-center justify-center text-4xl">🐦</div>
                        </div>
                        <div className="p-6 flex-grow">
                            <div className="text-xs font-bold text-brand-gold uppercase tracking-wide mb-2">Social</div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">X (Twitter) Feed</h3>
                            <p className="text-gray-600 mb-4">
                                Real-time commentary, quick takes, and engagement with the broader strategy community.
                            </p>
                        </div>
                        <div className="px-6 pb-6 mt-auto">
                            <a href="https://x.com/videndanish" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold hover:text-brand-navy transition-colors">
                                Follow &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Resource Card 5 - LinkedIn */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                        <div className="h-48 bg-gray-200 relative">
                            <div className="absolute inset-0 bg-brand-navy opacity-10 flex items-center justify-center text-4xl">💼</div>
                        </div>
                        <div className="p-6 flex-grow">
                            <div className="text-xs font-bold text-brand-gold uppercase tracking-wide mb-2">Professional</div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">LinkedIn Profile</h3>
                            <p className="text-gray-600 mb-4">
                                Connect for professional networking, articles, and updates on Viden Strategy&apos;s growth.
                            </p>
                        </div>
                        <div className="px-6 pb-6 mt-auto">
                            <a href="https://www.linkedin.com/in/mohammad-danish-uddin/" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold hover:text-brand-navy transition-colors">
                                Connect &rarr;
                            </a>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
};

export default Insights;
