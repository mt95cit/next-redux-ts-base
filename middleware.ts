import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isLoggedIn: boolean = true

export function middleware(request: NextRequest) {
  if (isLoggedIn) {
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL('/login', request.url))
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: ['/auth/:path*']
}
