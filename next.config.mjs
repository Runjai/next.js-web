/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'th'], // List your supported locales here
    defaultLocale: 'en',  // Set the default locale
  },
  images: {
    remotePatterns: [{hostname:'images.pexels.com'}], // Allow external image domains here
  },
};

export default nextConfig;
