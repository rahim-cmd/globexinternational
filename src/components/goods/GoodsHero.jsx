import { motion } from "framer-motion";
import { ArrowRight, Package, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

import onion from "../../assets/images/products/onion.png";
import rice from "../../assets/images/products/rice.png";
import garlic from "../../assets/images/products/garlic.png";

export default function GoodsHero() {
  return (
    <section className="relative overflow-hidden bg-[#08111d] pt-28 lg:pt-36 pb-24">

      {/* Background Glow */}

      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-500/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[2px] text-[#F6B91A]">

              <Package size={16} />

              Our Goods

            </div>

            <h1 className="mt-8 font-playfair text-5xl font-bold leading-tight text-white lg:text-7xl">

              Premium Agricultural

              <span className="block text-[#F6B91A]">

                Products Exported

              </span>

              Worldwide

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">

              Discover our carefully selected range of export-quality
              agricultural products sourced directly from trusted Indian
              farms and delivered to buyers across global markets.

            </p>

            {/* Small Highlights */}

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Rice",
                "Onion",
                "Garlic",
                "Spices",
                "Fresh Vegetables",
              ].map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white"
                >
                  {item}
                </span>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F6B91A] px-8 py-4 font-semibold text-black transition hover:scale-105"
              >

                Request Quote

                <ArrowRight size={18} />

              </Link>

              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-white transition hover:bg-white/10"
              >

                About Company

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

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">

              {/* Left Large */}

              <div className="space-y-5">

                <div className="overflow-hidden rounded-[30px]">

                  <img
                    src={onion}
                    alt="Fresh Onion"
                    className="h-[420px] w-full object-cover transition duration-700 hover:scale-110"
                  />

                </div>

                <div className="overflow-hidden rounded-[30px]">

                  <img
                    src={garlic}
                    alt="Fresh Garlic"
                    className="h-[220px] w-full object-cover transition duration-700 hover:scale-110"
                  />

                </div>

              </div>

              {/* Right */}

              <div className="pt-12">

                <div className="overflow-hidden rounded-[30px]">

                  <img
                    src={rice}
                    alt="Basmati Rice"
                    className="h-[520px] w-full object-cover transition duration-700 hover:scale-110"
                  />

                </div>

              </div>

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-8 top-10 hidden rounded-3xl border border-white/10 bg-[#18222d]/95 p-6 backdrop-blur-xl lg:block"
            >

              <div className="flex items-center gap-3">

                <Globe2 className="text-[#F6B91A]" />

                <div>

                  <p className="text-sm text-gray-400">

                    Exporting To

                  </p>

                  <h3 className="text-3xl font-bold text-[#F6B91A]">

                    15+

                  </h3>

                  <p className="text-white/80">

                    Countries

                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}