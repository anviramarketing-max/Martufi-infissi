import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Seo from "../components/Seo";
import QuoteForm from "../components/QuoteForm";
import { Cta } from "../components/Cta";
import { getProduct, products } from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug) || products[0];
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  return <><Seo title={`${product.title} | Martufi Infissi`} description={product.description} /><section className="detail-hero"><img src={product.image} alt={product.title} /><div><p className="eyebrow">Prodotto su misura</p><h1>{product.title}</h1><p>{product.description}</p><Link className="btn primary" to="/contatti">Richiedi preventivo <ArrowRight size={18} /></Link></div></section><section className="section detail-grid"><article><h2>Vantaggi</h2>{product.benefits.map((benefit) => <p key={benefit}><CheckCircle2 /> {benefit}</p>)}</article><article><h2>Quando e consigliato</h2><p>{product.advised}</p><p>Ogni intervento viene valutato in base a misure, contesto, obiettivi di comfort, sicurezza e budget.</p></article></section><section className="section form-section"><QuoteForm compact /></section><section className="section"><p className="eyebrow">Prodotti correlati</p><div className="product-grid related">{related.map((item) => <Link className="product-card" to={`/prodotti/${item.slug}`} key={item.slug}><img src={item.image} alt={item.title} /><h3>{item.title}</h3><p>{item.description}</p></Link>)}</div></section><Cta /></>;
}
