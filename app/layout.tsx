import React from 'react';
import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '../components/ui/Navbar';
import 'tailwindcss/tailwind.css';

export const metadata: Metadata = {
    title: 'Deliverit',
    description: 'Init your work day with Deliverit',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className='bg-primary'>
                <nav className='bg-primary'>
                    <Navbar isAuthenticated={true} />
                </nav>

                {children}
            </body>
        </html>
    );
}
