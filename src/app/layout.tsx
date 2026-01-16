import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/config/site";
import SkipLink from "@/components/a11y/SkipLink";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.brand,
    template: `%s · ${site.brand}`,
  },

  description: site.description ?? `${site.brand}${site.subbrand ? ` — ${site.subbrand}` : ""}`,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: site.url,
    title: site.brand,
    description:
      site.description ?? `${site.brand}${site.subbrand ? ` — ${site.subbrand}` : ""}`,
    siteName: site.brand,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: site.brand,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.brand,
    description:
      site.description ?? `${site.brand}${site.subbrand ? ` — ${site.subbrand}` : ""}`,
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <SiteHeader overlay />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
