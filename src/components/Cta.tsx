import { ArrowRight, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../data/site";

export function Cta({ title = "Vuoi una soluzione su misura per la tua casa?", text = "Raccontaci cosa vuoi migliorare: infissi, portoni, sicurezza, isolamento o posa. Ti aiutiamo a scegliere con chiarezza." }) {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow">Preventivo personalizzato</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-actions">
        <Link className="btn primary" to="/contatti"><Send size={18} /> Richiedi sopralluogo</Link>
        <a className="btn ghost" href={`tel:${site.mobile.replaceAll(" ", "")}`}><Phone size={18} /> Chiama ora</a>
        <a className="btn ghost" href={site.whatsapp}>WhatsApp <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}
