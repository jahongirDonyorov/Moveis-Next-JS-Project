/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // rasmni dameni register qilish unda rasmni quyib bulmaydi
  images: {
    domains: ['image.tmdb.org', 'rb.gy']
  }
}

module.exports = nextConfig
