import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateToken } from './utils';

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token');

    if (token) {
        const payload = await validateToken(token.value);

        if (request.nextUrl.pathname.startsWith('/auth') && payload) {
            return NextResponse.redirect(new URL('/dealer/home', request.url));
        }

        if (request.nextUrl.pathname.startsWith('/dealer') && !payload) {
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
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
