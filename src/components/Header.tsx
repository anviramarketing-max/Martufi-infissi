import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { site } from "../data/site";

const nav = [["/", "Home"], ["/prodotti", "Prodotti e Servizi"], ["/lavori", "I nostri lavori"], ["/recensioni", "Recensioni"], ["/contatti", "Contatti"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="brand" to="/"><img src="/images/logo/logo-martufi.jpg" alt="Martufi Infissi" /><span><strong>Martufi Infissi</strong><small>M. Infissi Srl</small></span></Link>
      <nav className={open ? "open" : ""}>{nav.map(([to, label]) => <NavLink onClick={() => setOpen(false)} key={to} to={to}>{label}</NavLink>)}</nav>
      <div className="header-actions"><a className="phone" href={`tel:${site.phone.replaceAll(" ", "")}`}><Phone size={17} /> {site.phone}</a><Link className="btn primary small" to="/contatti">Richiedi Preventivo</Link></div>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Apri menu">{open ? <X /> : <Menu />}</button>
    </header>
  );
}
