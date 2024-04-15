import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/pages/:path*')) {
  return NextResponse.rewrite(new URL('/404', request.url))
  }
}
 
// Supports both a single string value or an array of matchers
export const config = {
  matcher: ['/quotes', '/pages/:path*'],
}