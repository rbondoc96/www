import type { NextConfig } from "next";

export default <NextConfig>{
  experimental: {
    viewTransition: true,
  },
  reactCompiler: true,
};
