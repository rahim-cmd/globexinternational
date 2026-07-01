import ContactHero from "../components/contact/ContactHero";
import Footer from "../components/footer/Footer";
import Navbar from "../components/layout/Navbar";

export default function Contact() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center text-white text-5xl">
      <ContactHero/>
    </div>
    <Footer/>
    </>
  );
}