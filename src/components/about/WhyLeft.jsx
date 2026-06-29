import { motion } from "framer-motion";
import { FiGlobe, FiPackage, FiTruck, FiCheckCircle } from "react-icons/fi";

import whyImage from "../../assets/images/why-globex.png";

export default function WhyLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative lg:sticky lg:top-28 h-fit"
    >
      {/* Main Image */}

      <div
        className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        "
      >
        <img
          src={whyImage}
          alt="Globex International"
          className="
          
h-[520px]
lg:h-[460px]
w-full
object-cover
transition
duration-700
group-hover:scale-[1.02]
"
        />
        <div className="absolute inset-0 bg-black/25"></div>
        <div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,transparent_30%,rgba(7,17,29,.75))]
"
/>

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111d]/70 via-transparent to-transparent"></div>

        {/* Golden Glow */}

        <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-yellow-500/20 blur-[90px]"></div>
      </div>

      {/* Floating Card */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
        glass
        absolute
        -right-10
        top-[-20]
        w-60
        rounded-3xl
        p-6
        backdrop-blur-xl
        bg-white/8
        border-white/20
        translateY(-50%)
        "
      >
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-white">
            Export Highlights
          </h4>

          <FiGlobe className="text-2xl text-yellow-400" />
        </div>

        <div className="mt-6 space-y-5">
          <div className="flex items-center gap-3">
            <FiPackage className="text-yellow-400" />

            <span className="text-white/80">100+ Export Products</span>
          </div>

          <div className="flex items-center gap-3">
            <FiTruck className="text-yellow-400" />

            <span className="text-white/80">Fast Global Shipping</span>
          </div>

          <div className="flex items-center gap-3">
            <FiCheckCircle className="text-green-400" />

            <span className="text-white/80">Quality Checked</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Badge */}

      <motion.div
        animate={{
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        glass
        absolute
        -left-8
        lg:-left-14
        bottom-14
        rounded-2xl
        px-6
        py-4
        "
      >
        <p className="text-sm text-white/60">Trusted Export Partner</p>

        <h3 className="mt-1 text-3xl font-bold text-yellow-400">15+</h3>

        <span className="text-white/80">Countries Served</span>
      </motion.div>
    </motion.div>
  );
}
