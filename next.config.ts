// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: 'export',
//   reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Add this if you use next/image
  },
};

module.exports = nextConfig;





// /** @type {import('next').NextConfig} */
// const nextConfig: import('next').NextConfig = {
//   output: 'export',
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
