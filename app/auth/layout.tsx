import { Navbar } from '@/components/ui/navbar';
import React from 'react';
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <nav>
                <Navbar isAuthenticated={false} />
            </nav>

            <main>{children}</main>
        </div>
    );
}
