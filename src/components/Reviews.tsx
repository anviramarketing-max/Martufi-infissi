import { Star } from "lucide-react";
import { reviews } from "../data/site";
import { Reveal } from "./Motion";

export default function Reviews({ full = false }: { full?: boolean }) {
  const items = full ? reviews : reviews.slice(0, 3);
  return (
    <section className="section reviews-section">
      <Reveal><p className="eyebrow">Google · 4,6 su 5</p><h2>Precisione, pulizia e attenzione al cliente</h2><p className="section-text">Recensioni reali e testimonianze sintetiche per raccontare il modo di lavorare: consulenza, posa e assistenza.</p></Reveal>
      <div className="reviews-grid">{items.map((review, index) => <Reveal key={review.name} delay={index * 0.08}><article className="review-card"><div className="stars">{Array.from({ length: review.rating }, (_, i) => <Star key={i} size={18} fill="currentColor" />)}</div><p>“{review.text}”</p><strong>{review.name}</strong><small>{review.source}</small></article></Reveal>)}</div>
    </section>
  );
}
