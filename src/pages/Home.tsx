import { ArrowRight, BadgeCheck, Check, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Cta } from "../components/Cta";
import QuoteForm from "../components/QuoteForm";
import Reviews from "../components/Reviews";
import Seo from "../components/Seo";
import { Reveal } from "../components/Motion";
import { faqs, site } from "../data/site";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      <Seo />
      <section className="hero">
        <img src="/images/hero/homepage.jpg" alt="Serramenti moderni Martufi Infissi" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="badge">Produttori di serramenti da tre generazioni</p>
          <h1>Infissi e Serramenti a Veroli per una Casa piu Sicura, Efficiente e Bella da Vivere</h1>
          <p>Martufi Infissi realizza e installa serramenti, finestre, portoni e sistemi di chiusura su misura, con l'esperienza di tre generazioni e la qualita di un concessionario ufficiale Hormann.</p>
          <div className="hero-actions"><Link className="btn primary" to="/contatti">Richiedi un sopralluogo</Link><a className="btn light" href={`tel:${site.phone.replaceAll(" ", "")}`}><Phone size={18} /> Chiama ora</a><a className="btn light" href={site.whatsapp}>Scrivici su WhatsApp</a></div>
          <div className="benefits"><span>Tre generazioni</span><span>Concessionario Hormann</span><span>Serramenti su misura</span><span>Preventivi personalizzati</span></div>
        </div>
      </section>

      <section className="section split">
        <Reveal><div><p className="eyebrow">Problema / soluzione</p><h2>Quando scegli nuovi infissi, non stai cambiando solo una finestra</h2><p>Stai migliorando isolamento, sicurezza, comfort, risparmio energetico e valore della tua casa.</p></div></Reveal>
        <div className="compare"><Reveal><article><h3>Prima</h3>{["Infissi vecchi", "Dispersione termica", "Rumori esterni", "Poca sicurezza", "Portoni datati", "Manutenzione frequente"].map((x) => <p key={x}><Check /> {x}</p>)}</article></Reveal><Reveal delay={0.1}><article className="after"><h3>Dopo</h3>{["Piu comfort", "Piu isolamento", "Piu sicurezza", "Soluzioni su misura", "Estetica moderna", "Posa professionale"].map((x) => <p key={x}><BadgeCheck /> {x}</p>)}</article></Reveal></div>
      </section>

      <section className="section brand-section">
        <Reveal><div><p className="eyebrow">Partner ufficiale</p><h2>Concessionario ufficiale Hormann</h2><p>Martufi Infissi e concessionario ufficiale Hormann, leader europeo nella produzione di sistemi di chiusura. Una partnership ventennale che permette di offrire soluzioni affidabili, resistenti e tecnologicamente avanzate per portoni, porte garage e sistemi di chiusura.</p><Link className="btn primary" to="/prodotti/portoni-sezionali-hormann">Scopri le soluzioni Hormann <ArrowRight size={18} /></Link></div></Reveal>
        <Reveal delay={0.1}><img src="/images/prodotti/1-foto-1.jpg" alt="Portoni e sistemi di chiusura Hormann" /></Reveal>
      </section>

      <section className="section"><Reveal><p className="eyebrow">Prodotti e servizi</p><h2>Soluzioni complete per casa, garage e sicurezza</h2></Reveal><div className="product-grid home-products">{products.slice(0, 6).map((product) => <Link className="product-card" to={`/prodotti/${product.slug}`} key={product.slug}><img src={product.image} alt={product.title} /><product.icon /><h3>{product.title}</h3><p>{product.description}</p><span>Scopri di piu</span></Link>)}</div></section>

      <section className="section form-section"><QuoteForm /></section>
      <Reviews />
      <section className="section faq"><Reveal><p className="eyebrow">FAQ</p><h2>Domande frequenti</h2></Reveal>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      <Cta />
    </>
  );
}
