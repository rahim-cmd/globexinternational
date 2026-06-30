import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Goods from "./pages/Goods";
import Countries from "./pages/Countries";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Goods />} />

        <Route path="/countries" element={<Countries />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}