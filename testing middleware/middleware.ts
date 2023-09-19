import { api } from '../api/axiosInstance';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const token = getTokenFromRequest(request);
    console.log('token', token);
    if (!token) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    const response = await api.get('/api/user/me', {
        headers: {
            Authorization: token,
        },
    });

    if (response.status === 401) {
        return new NextResponse('Unauthorized', { status: 401 });
    }
    return NextResponse.next();
}

function getTokenFromRequest(request: NextRequest) {
    console.log('request', request.headers);
    const cookieHeader = request.headers.get('token');
    if (cookieHeader) {
        const match = cookieHeader.match(/token=(?<token>[^;]+)/);
        console.log(match);
        if (match) {
            return match[1];
        }
    }
}

export const config = {
    // Only apply the middleware to the /home path
    matcher: '/home',
};
