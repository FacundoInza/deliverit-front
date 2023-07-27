import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    subsets: ['latin-ext'],
    weight: ['400', '500', '600', '700'],
});
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Navbar from '../components/ui/Navbar';


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
            <body className={poppins.className + ' bg-primary'}>{children}</body>
                <nav className='bg-primary'>
                    <Navbar isAuthenticated={true} />
                </nav>
                {children}
            </body>

        </html>
    );
}
