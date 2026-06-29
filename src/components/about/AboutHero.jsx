import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import aboutHero from "../../assets/images/about/about-hero.png"; // <-- apni image

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#08111d] pt-28 lg:pt-36 pb-20">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-[140px]" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-green-500/10 blur-[180px]" />
    </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex items-center rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2 text-xs uppercase tracking-[2px] text-yellow-400">
              About Globex International
            </span>

            <h1 className="mt-8 font-serif font-bold leading-tight text-white text-5xl lg:text-7xl">

              Exporting India's

              <span className="block text-[#f8bf23]">
                Premium Agricultural
              </span>

              Products Worldwide
            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-300 max-w-xl">

              Globex International supplies premium Indian agricultural
              products to buyers worldwide with dependable sourcing,
              strict quality inspection, export documentation and
              reliable logistics support.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F0B100] px-8 py-4 text-black  font-semibold transition hover:scale-105 shadow-lg
                shadow-yellow-500/30"
              >
                Request Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-white transition hover:bg-white/10"
              >
                Explore Products
              </Link>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[30px] border border-white/10 shadow-2xl">

              <img
                src={aboutHero}
                alt="Globex International Warehouse"
                className="h-[620px] w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="hidden lg:block absolute -bottom-10 -left-10 rounded-3xl border border-white/10 bg-[#18222d]/95 backdrop-blur-xl p-7 shadow-2xl"
            >

              <p className="text-gray-400 text-sm">
                Trusted Export Partner
              </p>

              <h3 className="mt-2 font-serif text-5xl text-[#f8bf23]">
                15+
              </h3>

              <p className="mt-2 text-gray-300">
                Countries Served
              </p>

            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="hidden lg:block absolute top-10 -right-8 rounded-3xl border border-white/10 bg-[#18222d]/95 backdrop-blur-xl px-7 py-6 shadow-2xl"
            >

              <p className="text-gray-400 text-sm">
                Products Exported
              </p>

              <h3 className="mt-2 font-serif text-5xl text-[#f8bf23]">
                100+
              </h3>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;