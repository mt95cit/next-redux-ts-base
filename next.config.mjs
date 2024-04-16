/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        // {
        //   source: '/login',
        //   destination: '/pages/login',
        // },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        // {
        //   source: '/pages/login',
        //   destination: '/login'
        // }
      ]
    }
  }
  //   async redirects() {
  //     return [
  //         {
  //             source: '/',
  //             destination: '/login',
  //             basePath: false,
  //             permanent: false
  //         }
  //     ]
  // }
}

export default nextConfig
