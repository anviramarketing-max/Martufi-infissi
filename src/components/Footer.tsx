import { ArrowUp, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function Footer() {
  return (
    <>
      <a className="float-whatsapp" href={site.whatsapp} aria-label="WhatsApp"><MessageCircle /></a>
      <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Torna su"><ArrowUp /></button>
      <div className="mobile-sticky"><a href={`tel:${site.mobile.replaceAll(" ", "")}`}>Chiama ora</a><a href={site.whatsapp}>WhatsApp</a><Link to="/contatti">Preventivo</Link></div>
      <footer className="site-footer">
        <div><h3>Martufi Infissi</h3><p>Produttori di serramenti da tre generazioni. Concessionario ufficiale Hormann con partnership ventennale.</p></div>
        <div><h4>Contatti</h4><p><MapPin size={16} /> {site.address}</p><p><Phone size={16} /> {site.phone} · {site.mobile}</p><p><Mail size={16} /> {site.email}</p></div>
        <div><h4>Pagine</h4><Link to="/prodotti">Prodotti e Servizi</Link><Link to="/lavori">I nostri lavori</Link><Link to="/recensioni">Recensioni</Link><Link to="/contatti">Contatti</Link></div>
        <div><h4>Legal</h4><Link to="/privacy-policy">Privacy Policy</Link><Link to="/cookie-policy">Cookie Policy</Link><Link to="/note-legali">Note legali</Link><a href={site.facebook}>Facebook</a></div>
      </footer>
    </>
  );
}
