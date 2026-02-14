import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Viden Strategy', description = 'Data-Driven Strategy for Business Growth' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
