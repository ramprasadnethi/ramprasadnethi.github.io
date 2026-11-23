import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { profile } from "../content/portfolio";
import { Navigation } from "./navigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: profile.name + " | " + profile.role, template: "%s | " + profile.name },
  description: profile.summary,
  openGraph: { type: "website", siteName: profile.name },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header">
          <div className="shell header-inner">
            <Link href="/" className="brand"><span aria-hidden="true">RN</span>{profile.name}</Link>
            <Navigation />
          </div>
        </header>
        <main id="main" tabIndex={-1} className="grow">{children}</main>
        <footer className="site-footer">
          <div className="shell flex flex-wrap items-center justify-between gap-5">
            <p>{profile.name}<span className="footer-role"> · {profile.role}</span></p>
            <nav aria-label="Professional profiles" className="flex flex-wrap gap-x-5 gap-y-2">
              {profile.profiles.map(({ name, url }) => <a key={name} href={url}>{name}</a>)}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
