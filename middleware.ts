import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    let verificarToken = request.cookies.get('__Secure-next-auth.session-token.0')
    let url = request.url
    if (!verificarToken && url.includes('/dashboard')) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if (verificarToken && url.includes('/login')) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (request.nextUrl.pathname === "/" && !verificarToken) {
        return NextResponse.redirect(new URL("/login", request.url));
    }


}

export const config = {
    matcher: ['/', '/login', '/dashboard/:path*'],
};