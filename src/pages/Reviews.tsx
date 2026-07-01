import Reviews from "../components/Reviews";
import { Cta } from "../components/Cta";
import Seo from "../components/Seo";

export default function ReviewsPage() {
  return <><Seo title="Recensioni | Martufi Infissi" /><section className="page-hero"><p className="eyebrow">Recensioni</p><h1>Esperienze dei clienti</h1><p>Valutazione media 4,6 su 5 su Google, con attenzione a precisione, pulizia e professionalita.</p></section><Reviews full /><Cta title="Richiedi anche tu un sopralluogo" /></>;
}
