import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token');

    if (token) {
        const res = await fetch('http://localhost:5000/api/user/me', {
            headers: {
                Authorization: `Bearer ${token?.value}`,
            },
        });

        if (
            request.nextUrl.pathname.startsWith('/auth') &&
            res.status === 200
        ) {
            return NextResponse.redirect(new URL('/dealer/home', request.url));
        }

        if (
            request.nextUrl.pathname.startsWith('/dealer') &&
            res.status !== 200
        ) {
            return NextResponse.redirect(new URL('/auth', request.url));
        }
    } else {
        if (request.nextUrl.pathname.startsWith('/dealer')) {
            return NextResponse.redirect(new URL('/auth', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
