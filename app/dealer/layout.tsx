import React from 'react';
import { Navbar } from '@/components/ui/navbar';

export default function DealerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <nav>
                <Navbar isAuthenticated={true} />
            </nav>

            <main>{children}</main>
        </div>
    );
}
