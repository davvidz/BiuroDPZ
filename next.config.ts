import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // <-- dodane, żeby działał statyczny eksport
  images: {
    unoptimized: true, // <-- żeby <Image> działało bez optymalizacji node'owej
    domains: ["img.youtube.com", "i.ytimg.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "src/components"
    );
    config.resolve.alias["@styles"] = path.join(__dirname, "src/styles");
    config.resolve.alias["@assets"] = path.join(__dirname, "src/assets");
    return config;
  },
};

export default nextConfig;
