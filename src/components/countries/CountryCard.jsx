import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import { FiArrowUpRight } from "react-icons/fi";

export default function CountryCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: .6,
        delay: index * .12,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      className="
      group
      glass
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      p-7
      transition-all
      duration-500
      hover:border-yellow-400/30
      hover:shadow-[0_20px_50px_rgba(255,193,7,.15)]
      "
    >
      {/* Glow */}

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100"></div>

      <div className="relative flex items-center justify-between">

        <ReactCountryFlag
          countryCode={item.code}
          svg
          style={{
            fontSize: "54px",
          }}
        />

        <FiArrowUpRight
          className="
          text-3xl
          text-yellow-400
          transition
          duration-500
          group-hover:rotate-45
          "
        />

      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">

        {item.country}

      </h3>

      <p className="mt-3 text-white/60 leading-7">

        Exporting <span className="text-yellow-400">{item.product}</span>

      </p>

      <div className="mt-8 flex items-center justify-between">

        <div>

          <span className="text-sm text-white/45">

            Buyers

          </span>

          <h4 className="text-xl font-semibold text-white">

            {item.buyers}

          </h4>

        </div>

        <div
          className="
          rounded-full
          border
          border-green-400/30
          bg-green-500/10
          px-4
          py-2
          text-sm
          text-green-300
          "
        >
          {item.status}
        </div>

      </div>
    </motion.div>
  );
}