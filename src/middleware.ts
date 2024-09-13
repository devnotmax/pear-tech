import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userSession = request.cookies.get('userSession')?.value;

  const isAuthRoute = ['/login', '/register'].includes(request.nextUrl.pathname);

  

  if (!userSession && !isAuthRoute) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.set('userSession', '', { maxAge: 0 });
    response.headers.set('Clear-Site-Data', '"storage"'); // Esto limpia el localStorage en el lado del cliente
    return response;
  }

  // Extender la expiración de la cookie si la sesión está activa
  if (userSession) {
    const expires = new Date();
    expires.setMonth(expires.getMonth() + 3);
    const response = NextResponse.next();
    response.cookies.set('userSession', userSession, { expires });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/cart', '/login', '/register'], // Rutas que deben ser protegidas
};