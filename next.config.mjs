/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    staticPageGenerationTimeout: 300,
    output: 'standalone',
  
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
      formats: ['image/avif', 'image/webp'],
      minimumCacheTTL: 86400,
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  
    webpack: (config, { isServer }) => {
      config.resolve.fallback = { 
        ...config.resolve.fallback,
        punycode: false
      };
  
      config.ignoreWarnings = [
        { 
          module: /node_modules[\\/]punycode/,
          message: /.*punycode.*/
        },
        { 
          module: /node_modules[\\/]@react-aria/,
          message: /.*useLayoutEffect.*/
        }
      ];
  
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          net: false,
          tls: false
        };
      }
  
      return config;
    },
  
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN'
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block'
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin'
            }
          ],
        },
      ];
    },
  
    experimental: {
      // Remove serverActions and appDir as they're now stable
      serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs'],
      optimizeCss: true,
      scrollRestoration: true,
    },
  
    eslint: {
      ignoreDuringBuilds: true,
    },
  
    typescript: {
      ignoreBuildErrors: process.env.NODE_ENV === 'development',
    }
  };
  
  export default nextConfig;