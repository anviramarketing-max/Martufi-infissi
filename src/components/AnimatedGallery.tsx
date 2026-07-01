import { X } from "lucide-react";
import { useState } from "react";
import { galleryImages } from "../data/site";

export default function AnimatedGallery() {
  const [active, setActive] = useState<string | null>(null);
  const rowA = galleryImages.slice(0, 14);
  const rowB = galleryImages.slice(14);
  const row = (items: string[], reverse = false) => <div className={`gallery-row ${reverse ? "reverse" : ""}`}>{[...items, ...items].map((src, index) => <button key={`${src}-${index}`} onClick={() => setActive(src)}><img src={src} alt="Lavoro Martufi Infissi" /><span>{index % 3 === 0 ? "Serramenti" : index % 3 === 1 ? "Portoni" : "Dettagli posa"}</span></button>)}</div>;
  return (
    <div className="animated-gallery">
      {row(rowA)}{row(rowB, true)}
      {active && <div className="lightbox" onClick={() => setActive(null)}><button aria-label="Chiudi"><X /></button><img src={active} alt="Installazione Martufi Infissi" /></div>}
    </div>
  );
}
