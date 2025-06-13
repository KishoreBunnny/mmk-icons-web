@type {import('next').NextConfig} 
const nextConfig = {
  //output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Add this if you use next/image
  },
};

module.exports = nextConfig;


