import { BadgeCheck, Blinds, DoorClosed, Frame, Hammer, Home, KeyRound, Layers, Shield, Sparkles, Sun, Warehouse, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Product = {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  benefits: string[];
  advised: string;
};

const productImages = {
  aluminumWindows: "/images/prodotti/finestre-alluminio.jpg",
  customFrames: "/images/prodotti/infissi-su-misura.jpg",
  pvcFrames: "/images/prodotti/serramenti-pvc.jpg",
  interiorDoors: "/images/prodotti/porte-interne.jpg",
  exteriorDoors: "/images/prodotti/porte-esterne.jpg",
  sectionalDoors: "/images/prodotti/portoni-sezionali-hormann.jpg",
  garageDoors: "/images/prodotti/porte-garage.jpg",
  closingSystems: "/images/prodotti/sistemi-chiusura.jpg",
  shutters: "/images/prodotti/persiane.jpg",
  rollerShutters: "/images/prodotti/avvolgibili.jpg",
  insectScreens: "/images/prodotti/zanzariere.jpg",
  grilles: "/images/prodotti/inferriate.jpg",
  securityDoors: "/images/prodotti/portoni-blindati.jpg",
  maintenance: "/images/prodotti/assistenza-manutenzione.jpg",
  installation: "/images/prodotti/posa-certificata.jpg",
};

export const products: Product[] = [
  { slug: "finestre-alluminio", title: "Finestre in alluminio", description: "Serramenti resistenti, eleganti e durevoli per design moderno e alte prestazioni.", image: productImages.aluminumWindows, icon: Frame, benefits: ["Profili sottili", "Alta durata", "Ottimo isolamento", "Design contemporaneo"], advised: "Ideali per chi cerca sicurezza, luminosita e manutenzione ridotta." },
  { slug: "infissi-su-misura", title: "Infissi e serramenti su misura", description: "Soluzioni progettate sulle misure reali della tua casa, con posa precisa.", image: productImages.customFrames, icon: Layers, benefits: ["Rilievo misure", "Personalizzazione", "Comfort abitativo", "Finiture coordinate"], advised: "Consigliati in ristrutturazioni, nuove aperture e sostituzioni complete." },
  { slug: "serramenti-pvc", title: "Serramenti in PVC", description: "Infissi efficienti, versatili e convenienti per migliorare comfort e risparmio.", image: productImages.pvcFrames, icon: Home, benefits: ["Isolamento termico", "Riduzione rumore", "Facile manutenzione", "Buon rapporto qualita prezzo"], advised: "Perfetti per abitazioni che vogliono efficienza energetica e praticita." },
  { slug: "porte-interne", title: "Porte interne", description: "Porte coordinate allo stile degli ambienti, funzionali e curate nei dettagli.", image: productImages.interiorDoors, icon: DoorClosed, benefits: ["Ampia scelta", "Finiture moderne", "Installazione pulita", "Soluzioni salvaspazio"], advised: "Per rinnovare gli ambienti con coerenza estetica e funzionalita." },
  { slug: "porte-esterne", title: "Porte esterne", description: "Ingressi robusti e isolanti per proteggere e valorizzare la casa.", image: productImages.exteriorDoors, icon: Shield, benefits: ["Sicurezza", "Resistenza", "Isolamento", "Estetica d'ingresso"], advised: "Per ingressi esposti, abitazioni indipendenti e accessi secondari." },
  { slug: "portoni-sezionali-hormann", title: "Portoni sezionali Hormann", description: "Soluzioni affidabili e tecnologicamente avanzate firmate leader europeo.", image: productImages.sectionalDoors, icon: Warehouse, benefits: ["Qualita Hormann", "Movimento fluido", "Sicurezza", "Automazioni disponibili"], advised: "Per garage, abitazioni e attivita che richiedono chiusure robuste." },
  { slug: "porte-garage", title: "Porte garage", description: "Chiusure pratiche e resistenti per garage privati e spazi tecnici.", image: productImages.garageDoors, icon: KeyRound, benefits: ["Uso quotidiano", "Tenuta", "Automazione", "Misure dedicate"], advised: "Quando serve un accesso comodo, sicuro e durevole." },
  { slug: "sistemi-chiusura", title: "Sistemi di chiusura", description: "Chiusure evolute per protezione, praticita e controllo degli accessi.", image: productImages.closingSystems, icon: BadgeCheck, benefits: ["Affidabilita", "Sicurezza", "Tecnologia", "Assistenza"], advised: "Per case, box, magazzini e attivita con esigenze specifiche." },
  { slug: "persiane", title: "Persiane", description: "Protezione solare, privacy e carattere architettonico per ogni facciata.", image: productImages.shutters, icon: Sun, benefits: ["Ombreggiamento", "Resistenza", "Stile", "Protezione"], advised: "Per migliorare privacy, comfort estivo e aspetto esterno." },
  { slug: "avvolgibili", title: "Avvolgibili", description: "Sistemi pratici per oscuramento, sicurezza e gestione della luce.", image: productImages.rollerShutters, icon: Blinds, benefits: ["Comfort", "Privacy", "Automazioni", "Protezione"], advised: "Per finestre esistenti e nuove installazioni con uso frequente." },
  { slug: "zanzariere", title: "Zanzariere", description: "Soluzioni discrete e funzionali per vivere gli ambienti aperti con piu comfort.", image: productImages.insectScreens, icon: Sparkles, benefits: ["Aria naturale", "Protezione", "Ingombro ridotto", "Facilita d'uso"], advised: "Per finestre, portefinestre e ambienti molto vissuti." },
  { slug: "inferriate", title: "Inferriate", description: "Protezione robusta per finestre e accessi, con attenzione all'estetica.", image: productImages.grilles, icon: Shield, benefits: ["Sicurezza", "Resistenza", "Personalizzazione", "Durata"], advised: "Per piani bassi, abitazioni isolate e aperture vulnerabili." },
  { slug: "portoni-blindati", title: "Portoni blindati", description: "Ingressi sicuri e solidi per proteggere casa e famiglia.", image: productImages.securityDoors, icon: DoorClosed, benefits: ["Antieffrazione", "Isolamento", "Solidita", "Finiture curate"], advised: "Per sostituzioni ingresso e interventi orientati alla sicurezza." },
  { slug: "assistenza-manutenzione", title: "Assistenza e manutenzione", description: "Interventi per mantenere serramenti e chiusure efficienti nel tempo.", image: productImages.maintenance, icon: Wrench, benefits: ["Controllo", "Regolazioni", "Ripristino", "Supporto"], advised: "Per prodotti gia installati, chiusure rumorose o usura nel tempo." },
  { slug: "posa-certificata", title: "Posa certificata", description: "Installazione curata per valorizzare davvero le prestazioni dei serramenti.", image: productImages.installation, icon: Hammer, benefits: ["Precisione", "Pulizia", "Tenuta", "Risultato duraturo"], advised: "Fondamentale in ogni sostituzione o nuova installazione." },
];

export const getProduct = (slug = "") => products.find((product) => product.slug === slug);
