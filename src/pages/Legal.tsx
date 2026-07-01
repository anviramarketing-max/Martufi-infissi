import Seo from "../components/Seo";
import { site } from "../data/site";

export default function Legal() {
  return <><Seo title="Note legali | Martufi Infissi" /><section className="legal-page"><h1>Note legali</h1><p>{site.legalName}</p><p>Sede: {site.address}</p><p>Telefono: {site.phone} · Mobile: {site.mobile}</p><p>Email: {site.email}</p><p>Le informazioni presenti nel sito hanno finalita descrittiva e commerciale. Testi, disponibilita prodotti e condizioni di servizio devono essere confermati dall'azienda prima della pubblicazione definitiva.</p></section></>;
}
