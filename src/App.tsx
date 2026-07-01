import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import Works from "./pages/Works";
import ReviewsPage from "./pages/Reviews";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  const progress = Math.min(100, Math.round(((window.scrollY || 0) / Math.max(1, document.body.scrollHeight - innerHeight)) * 100));
  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <Header />
      <main key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodotti" element={<ProductsPage />} />
          <Route path="/prodotti/:slug" element={<ProductDetail />} />
          <Route path="/lavori" element={<Works />} />
          <Route path="/recensioni" element={<ReviewsPage />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="/note-legali" element={<Legal />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
