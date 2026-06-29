import hero from "../../assets/images/hero.png";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import { motion } from "framer-motion";
import Particles from "./Particles";
import MouseGlow from "./MouseGlow";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">



        <MouseGlow/>
      {/* Background */}

     <motion.img
    src={hero}
    alt=""
    initial={{ scale: 1 }}
    animate={{
        scale: 1.08,
    }}
    transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
    }}
    className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    object-right
    "
/>
<Particles/>

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#07111D]/60"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#07111D] via-[#07111D]/65 to-transparent"></div>

      <motion.div
    animate={{
        opacity: [0.15,0.3,0.15],
    }}
    transition={{
        duration:6,
        repeat:Infinity,
    }}
    className="
    absolute
    inset-0
    bg-yellow-400/10
    mix-blend-overlay
    "
/>

      {/* Content */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-20 lg:px-10">

    <div className="grid w-full items-center gap-16 lg:grid-cols-2">

        <HeroLeft />

        <div className="flex justify-end">

            <HeroRight />

        </div>

    </div>

</div>

    </section>
  );
}