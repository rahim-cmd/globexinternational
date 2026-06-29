import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import WhyGlobex from "../components/about/WhyGlobex";
import Products from "../components/products/Products";
import Countries from "../components/countries/Countries";
import Process from "../components/process/Process";
import Gallery from "../components/Gallery/Gallery";
import CTA from "../components/cta/CTA";
import Footer from "../components/footer/Footer";

export default function Home(){

    return(
        <>
            <Navbar/>
            <Hero/>
            <WhyGlobex/>
            <Products/>
            <Countries/>
            <Process/>
            <Gallery/>
            <CTA/>
            <Footer/>
        </>
    )

}