import type { MetadataRoute } from "next";
import { pages, profile } from "../content/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.site + "/" },
    ...Object.keys(pages).map((slug) => ({ url: profile.site + "/" + slug + "/" })),
  ];
}
