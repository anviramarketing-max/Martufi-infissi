import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import { Cta } from "../components/Cta";
import { Reveal } from "../components/Motion";
import { products } from "../data/products";

export default function ProductsPage() {
  return <><Seo title="Prodotti e Servizi | Martufi Infissi" /><section className="page-hero"><p className="eyebrow">Prodotti e Servizi</p><h1>Serramenti, portoni e sistemi di chiusura su misura</h1><p>Soluzioni selezionate per isolamento, sicurezza, resistenza, estetica e assistenza nel tempo.</p></section><section className="section"><div className="product-grid">{products.map((product, index) => <Reveal key={product.slug} delay={(index % 6) * 0.04}><Link className="product-card" to={`/prodotti/${product.slug}`}><img src={product.image} alt={product.title} /><product.icon /><h3>{product.title}</h3><p>{product.description}</p><span>Scopri di piu <ArrowRight size={16} /></span></Link></Reveal>)}</div></section><Cta /></>;
}
