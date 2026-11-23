"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "../content/portfolio";

const links = [
  { href: "/", label: "Home" },
  ...Object.entries(pages).map(([slug, { label }]) => ({ href: "/" + slug + "/", label })),
];

export function Navigation() {
  const pathname = usePathname().replace(/\/$/, "");
  return (
    <nav className="primary-nav" aria-label="Main navigation">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} aria-current={pathname === href.replace(/\/$/, "") ? "page" : undefined}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
