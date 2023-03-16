/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TYPE: process.env.TYPE,
    PROJECT_ID: process.env.PROJECT_ID,
    PRIVATE_KEY_ID: process.env.PRIVATE_KEY_ID,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    CLIENT_ID: process.env.CLIENT_ID,
    AUTH_URI: process.env.AUTH_URI,
    TOKEN_URI: process.env.TOKEN_URI,
    AUTH_PROVIDER_X509_CERT_URL: process.env.AUTH_PROVIDER_X509_CERT_URL,
    CLIENT_X509_CERT_URL: process.env.CLIENT_X509_CERT_URL

  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.tls = false
      config.resolve.fallback.net = false
      config.resolve.fallback.child_process = false
    }

    return config
  },
  future: {
    webpack5: true,
  },
  fallback: {
    fs: false,
    tls: false,
    net: false,
    child_process: false
  },
}

module.exports = nextConfig;
