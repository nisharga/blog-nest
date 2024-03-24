/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co'
            }
        ],
        domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com']
    }
};

export default nextConfig;
