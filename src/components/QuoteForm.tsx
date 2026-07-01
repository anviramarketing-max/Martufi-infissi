import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Link } from "react-router-dom";

const clean = (value: string) => value.replace(/[<>]/g, "").trim();

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (clean(String(data.get("website") || ""))) return;
    const required = ["nome", "cognome", "telefono", "zona", "intervento", "privacy"];
    const missing = required.some((field) => !clean(String(data.get(field) || "")));
    if (missing) {
      setError("Compila i campi obbligatori e accetta la Privacy Policy.");
      return;
    }
    setError("");
    setSent(true);
    event.currentTarget.reset();
  };

  if (sent) return <div className="form-success"><CheckCircle2 /> Richiesta preparata. Per collegare l'invio reale serve un backend o un servizio form.</div>;

  return (
    <form className={`quote-form ${compact ? "compact" : ""}`} onSubmit={submit}>
      <div className="form-head">
        <p className="eyebrow">Sopralluogo e preventivo</p>
        <h2>Richiedi una consulenza su misura</h2>
        <p>Risposta rapida · Consulenza personalizzata · Preventivo su misura · Nessun impegno</p>
      </div>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" />
      <div className="grid two"><input name="nome" placeholder="Nome *" /><input name="cognome" placeholder="Cognome *" /></div>
      <div className="grid two"><input name="telefono" placeholder="Telefono *" /><input name="email" type="email" placeholder="Email" /></div>
      <input name="zona" placeholder="Comune / zona intervento *" />
      <div className="grid two">
        <select name="intervento" defaultValue=""><option value="" disabled>Tipo intervento *</option><option>Finestre / Infissi</option><option>Portoni Hormann</option><option>Porte garage</option><option>Serramenti</option><option>Zanzariere</option><option>Persiane / Avvolgibili</option><option>Portoni blindati</option><option>Assistenza</option><option>Altro</option></select>
        <input name="prodotto" placeholder="Prodotto richiesto" />
      </div>
      <div className="grid three"><input name="numero" placeholder="Numero elementi" /><select name="foto" defaultValue=""><option value="" disabled>Hai gia foto o misure?</option><option>Si</option><option>No</option><option>Posso inviarle dopo</option></select><select name="tempistiche" defaultValue=""><option value="" disabled>Tempistiche</option><option>Subito</option><option>Entro 1 mese</option><option>Entro 3 mesi</option><option>Sto solo valutando</option></select></div>
      <select name="budget" defaultValue=""><option value="" disabled>Budget indicativo</option><option>Fino a 2.000 euro</option><option>2.000 euro - 5.000 euro</option><option>5.000 euro - 10.000 euro</option><option>Oltre 10.000 euro</option><option>Da definire</option></select>
      <textarea name="messaggio" rows={4} placeholder="Messaggio" />
      <label className="privacy"><input type="checkbox" name="privacy" /> Accetto la <Link to="/privacy-policy">Privacy Policy</Link> *</label>
      {error && <p className="form-error">{error}</p>}
      <button className="btn primary" type="submit"><Send size={18} /> Invia richiesta di sopralluogo</button>
    </form>
  );
}
