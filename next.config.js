/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.drivingexamexpert.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.corporatephotographerslondon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "us.modzverse.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
