import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return <><Seo title="Pagina non trovata | Martufi Infissi" /><section className="page-hero"><p className="eyebrow">404</p><h1>Questa pagina non esiste</h1><p>Puoi tornare alla home o richiedere direttamente un preventivo.</p><Link className="btn primary" to="/">Torna alla Home</Link></section></>;
}
