import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import QuoteForm from "../components/QuoteForm";
import Seo from "../components/Seo";
import { faqs, site } from "../data/site";

export default function Contact() {
  return <><Seo title="Contatti | Martufi Infissi" /><section className="page-hero"><p className="eyebrow">Contatti</p><h1>Parliamo del tuo prossimo intervento</h1><p>Chiama, scrivi o richiedi un sopralluogo per infissi, serramenti, portoni Hormann, porte garage e sistemi di chiusura.</p></section><section className="section contact-grid"><div className="contact-card"><h2>{site.legalName}</h2><p><MapPin /> {site.address}</p><p><MapPin /> {site.altAddress}</p><p><Phone /> {site.phone} · {site.mobile}</p><p><Mail /> {site.email}</p><div className="contact-actions"><a className="btn primary" href={`tel:${site.phone.replaceAll(" ", "")}`}>Chiama sede</a><a className="btn ghost" href={`tel:${site.mobile.replaceAll(" ", "")}`}>Chiama mobile</a><a className="btn ghost" href={site.whatsapp}><MessageCircle size={18} /> WhatsApp</a><a className="btn ghost" href={`mailto:${site.email}`}>Email</a><a className="btn ghost" href={site.maps}>Indicazioni Google Maps</a></div></div><QuoteForm /></section><section className="section faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section></>;
}
