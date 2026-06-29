import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import ExportProcess from "../components/about/ExportProcess";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Footer from "../components/footer/Footer";
import Navbar from "../components/layout/Navbar";
import CTA from "../components/cta/CTA";

export default function About() {
  return (
    <>
        <Navbar/>
        <AboutHero />
        <CompanyStory/>
        <ExportProcess/>
        <WhyChooseUs/>
        <CTA/>
        <Footer/>
    </>
  );
}