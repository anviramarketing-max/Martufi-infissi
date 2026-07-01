import AnimatedGallery from "../components/AnimatedGallery";
import { Cta } from "../components/Cta";
import Seo from "../components/Seo";

export default function Works() {
  return <><Seo title="I nostri lavori | Martufi Infissi" /><section className="page-hero"><p className="eyebrow">Installazioni e dettagli</p><h1>I nostri lavori parlano prima delle parole</h1><p>Una selezione di installazioni, dettagli e soluzioni realizzate per finestre, serramenti, portoni, sistemi di chiusura e lavori su misura.</p></section><section className="section gallery-wrap"><AnimatedGallery /></section><Cta title="Vuoi una soluzione simile per la tua casa?" text="Richiedi un sopralluogo e raccontaci cosa vuoi migliorare: sicurezza, isolamento, estetica o praticita quotidiana." /></>;
}
