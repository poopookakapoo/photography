import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/config/site";
import SkipLink from "@/components/a11y/SkipLink";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: site.brand,
  description: `${site.brand} — ${site.subbrand}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <SiteHeader overlay/>
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
