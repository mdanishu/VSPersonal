import Link from 'next/link';

const Services: React.FC = () => {
    return (
        <>
            <main className="container mx-auto py-16 px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-brand-navy font-serif mb-6">Bespoke Strategic Partnership.</h1>
                    <p className="text-xl text-gray-600">
                        From fractional leadership to proprietary data tools, we deliver the edge you need to compete.
                    </p>
                </div>

                {/* Service 1: Advisory */}
                <div className="flex flex-col md:flex-row items-center mb-20 border-b border-gray-100 pb-20">
                    <div className="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Advisory & Consulting</h2>
                        <h3 className="text-xl text-brand-gold font-semibold mb-6">Fractional Chief Strategy Officer (CSO)</h3>
                        <p className="text-gray-600 mb-6">
                            For small businesses and startups that need C-suite level strategic thinking without the full-time cost.
                            We act as your sparring partner, helping you refine your business model, identify growth levers, and navigate complex market dynamics.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                            <li>Business Model Innovation</li>
                            <li>Market Entry Strategy</li>
                            <li>Unit Economics Optimization</li>
                            <li>Board Advisory & Mentorship</li>
                        </ul>
                        <Link href="/contact" className="text-brand-blue font-bold hover:underline">Book a Discovery Call &rarr;</Link>
                    </div>
                    <div className="w-full md:w-1/2 bg-brand-cream h-64 rounded-lg flex items-center justify-center p-10">
                        {/* Placeholder for illustration/icon */}
                        <div className="text-center">
                            <span className="text-6xl text-brand-navy opacity-20 block mb-4">♟️</span>
                            <p className="text-sm text-gray-400 uppercase tracking-widest">Strategy & Vision</p>
                        </div>
                    </div>
                </div>

                {/* Service 2: Data Products */}
                <div className="flex flex-col md:flex-row-reverse items-center mb-20 border-b border-gray-100 pb-20">
                    <div className="w-full md:w-1/2 md:pl-10 mb-10 md:mb-0">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Data Products & Apps</h2>
                        <h3 className="text-xl text-brand-gold font-semibold mb-6">Custom Dashboards & Tools</h3>
                        <p className="text-gray-600 mb-6">
                            Static reports are dead. We build interactive Shiny apps and Streamlit dashboards that allow you to visualize your competitive advantage and democratize data access across your team.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                            <li>Custom KPI Dashboards</li>
                            <li>Interactive Data Visualizations</li>
                            <li>Automated Reporting Pipelines</li>
                            <li>Proprietary Data Scrapers</li>
                        </ul>
                        <Link href="/contact" className="text-brand-blue font-bold hover:underline">Request a Demo &rarr;</Link>
                    </div>
                    <div className="w-full md:w-1/2 bg-brand-cream h-64 rounded-lg flex items-center justify-center p-10">
                        {/* Placeholder for illustration/icon */}
                        <div className="text-center">
                            <span className="text-6xl text-brand-navy opacity-20 block mb-4">📊</span>
                            <p className="text-sm text-gray-400 uppercase tracking-widest">Interactive Intelligence</p>
                        </div>
                    </div>
                </div>

                {/* Service 3: Investment Research */}
                <div className="flex flex-col md:flex-row items-center mb-20">
                    <div className="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Investment Research</h2>
                        <h3 className="text-xl text-brand-gold font-semibold mb-6">Institutional-Grade Due Diligence</h3>
                        <p className="text-gray-600 mb-6">
                            For private and public investors who need more than surface-level analysis.
                            We apply scientific rigor to validate theses, analyze clinical trial data (Biotech), and assess market moats.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                            <li>Biotech/Pharma Asset Evaluation</li>
                            <li>Competitive Landscape Analysis</li>
                            <li>Technical Feasibility Assessment</li>
                            <li>Macro Trend Reports</li>
                        </ul>
                        <Link href="/insights" className="text-brand-blue font-bold hover:underline">Read Sample Research &rarr;</Link>
                    </div>
                    <div className="w-full md:w-1/2 bg-brand-cream h-64 rounded-lg flex items-center justify-center p-10">
                        {/* Placeholder for illustration/icon */}
                        <div className="text-center">
                            <span className="text-6xl text-brand-navy opacity-20 block mb-4">🔬</span>
                            <p className="text-sm text-gray-400 uppercase tracking-widest">Rigorous Analysis</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-brand-navy text-white rounded-xl p-12 text-center">
                    <h2 className="text-3xl font-bold font-serif mb-4">Not sure where to start?</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let&apos;s have a conversation. We offer a complimentary 15-minute strategy triage to see if we&apos;re a good fit.
                    </p>
                    <Link href="/contact" className="inline-block px-10 py-4 bg-brand-gold text-brand-navy font-bold rounded-lg hover:bg-white transition-colors duration-300">
                        Book Your Triage Call
                    </Link>
                </div>

            </main>
        </>
    );
};

export default Services;
