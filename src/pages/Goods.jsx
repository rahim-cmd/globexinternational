import Navbar from "../components/layout/Navbar";
import GoodsHero from "../components/goods/GoodsHero";
import GoodsCategories from "../components/goods/GoodsCategories";
import GoodsGrid from "../components/goods/GoodsGrid";

import CTA from "../components/cta/CTA";
import Footer from "../components/footer/Footer";

export default function Goods() {
  return (
    <>
      <Navbar/>
      <GoodsHero />

      <GoodsCategories />

      <GoodsGrid />

      <CTA />
      <Footer/>
    </>
  );
}