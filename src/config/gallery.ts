import type { StaticImageData } from "next/image";

import img1 from "../../public/images/1.jpg";
import img2 from "../../public/images/2.jpg";
import img3 from "../../public/images/3.jpg";
import img4 from "../../public/images/4.jpg";
import img5 from "../../public/images/5.jpg";
import img6 from "../../public/images/6.jpg";
import img7 from "../../public/images/7.jpg";
import img8 from "../../public/images/8.jpg";
import img9 from "../../public/images/9.jpg";

export const CATEGORY = [
  "Individual Portraits",
  "Business Portraits",
  "Artistic Portraits",
  "Beauty Portraits",
  "Family Portraits",
  "Model Portraits",
  "Wedding Photos",
] as const;

export type Category = (typeof CATEGORY)[number];

export type GalleryItem = {
  id: string;
  src: StaticImageData;
  alt: string;
  categories: Category[];
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "img-1",
    src: img1,
    alt: "Gallery image 1",
    categories: ["Family Portraits"],
    featured: true,
  },
  { id: "img-2", src: img2, alt: "Gallery image 2", categories: ["Individual Portraits"] },
  { id: "img-3", src: img3, alt: "Gallery image 3", categories: ["Wedding Photos"] },
  { id: "img-4", src: img4, alt: "Gallery image 4", categories: ["Individual Portraits"] },
  { id: "img-5", src: img5, alt: "Gallery image 5", categories: ["Beauty Portraits"] },
  { id: "img-6", src: img6, alt: "Gallery image 6", categories: ["Family Portraits"] },
  { id: "img-7", src: img7, alt: "Gallery image 7", categories: ["Business Portraits"] },
  { id: "img-8", src: img8, alt: "Gallery image 8", categories: ["Model Portraits"] },
  { id: "img-9", src: img9, alt: "Gallery image 9", categories: ["Artistic Portraits"] },
];
