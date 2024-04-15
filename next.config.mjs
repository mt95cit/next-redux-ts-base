/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: '/login',
          destination: '/pages/login',
        },
        {
          source: '/auth/dashboard',
          destination: '/pages/auth/dashboard',
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: '/pages/login',
          destination: '/login',
        },
      ],
    }
  }
};

export default nextConfig;
