import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.181.128.196"],

  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;