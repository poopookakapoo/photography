"use client";

import dynamic from "next/dynamic";

const GallerySection = dynamic(() => import("@/sections/GallerySection"), {
  ssr: false,
  loading: () => null,
});

export default function GallerySectionClient() {
  return <GallerySection />;
}
