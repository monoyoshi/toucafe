/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingIncludes: {
        '/api/another': ['./necessary-folder/**/*'],
    },
    images: {
        remotePatterns: [new URL('https://cdn.bladewyrm.dev/images/**')],
    }
};

export default nextConfig;