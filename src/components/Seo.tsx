import { useEffect } from "react";
import { site } from "../data/site";

export default function Seo({ title = site.metaTitle, description = site.metaDescription }: { title?: string; description?: string }) {
  useEffect(() => {
    document.title = title;
    const upsert = (name: string, content: string, attr = "name") => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };
    upsert("description", description);
    upsert("keywords", site.keywords);
    upsert("og:title", title, "property");
    upsert("og:description", description, "property");
    upsert("og:type", "website", "property");
    upsert("og:image", "/images/hero/homepage.jpg", "property");
  }, [title, description]);
  return null;
}
