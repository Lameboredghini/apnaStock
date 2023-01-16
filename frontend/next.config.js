/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
    domains: [
      'images.unsplash.com',
      'i.ibb.co'
    ]
  }
}
