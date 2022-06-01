/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  assetPrefix: "/.",
  trailingSlash: true,

  images: {
    domains: [
      "https://parent-portal-nurseries-photos-production.s3.eu-central-1.amazonaws.com/",
      "https://ehdesign.dk",
    ]
  },
};
