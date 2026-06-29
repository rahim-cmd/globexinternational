import { motion } from "framer-motion";
import {
  FiAward,
  FiTruck,
  FiGlobe,
  FiFileText,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

const features = [
  {
    icon: <FiAward />,
    title: "Premium Quality Products",
    text: "Every shipment is carefully inspected before export.",
  },
  {
    icon: <FiTruck />,
    title: "Reliable Logistics",
    text: "Sea & Air freight with trusted logistics partners.",
  },
  {
    icon: <FiGlobe />,
    title: "Global Export Network",
    text: "Supplying buyers across multiple international markets.",
  },
  {
    icon: <FiFileText />,
    title: "Complete Documentation",
    text: "IEC, Phytosanitary, Fumigation & Export Certificates.",
  },
  {
    icon: <FiShield />,
    title: "Trusted Business",
    text: "Transparent pricing with long-term business relationships.",
  },
];

export default function WhyRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Badge */}

      <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm text-yellow-300 backdrop-blur-xl">
        WHY GLOBEX INTERNATIONAL
      </div>

      {/* Heading */}

      <h2 className="heading-font mt-7 text-5xl leading-tight font-bold text-white">
        Trusted By
        <span className="block text-gradient">Global Importers</span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/65">
        We connect trusted Indian farmers and manufacturers with international
        buyers through premium quality products, transparent business practices
        and dependable export logistics.
      </p>

      {/* Feature Cards */}

      <div className="mt-14 space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.12,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="
            group
            glass
            flex
            items-start
            gap-5
            rounded-3xl
            p-5
            transition-all
            duration-500
            hover:-translate-y-2
            hover:scale-[1.02]
            hover:border-yellow-400/30
            hover:shadow-[0_15px_45px_rgba(255,193,7,.15)]
            "
          >
            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-yellow-500/10
              text-2xl
              text-yellow-400
              transition
              duration-500
              group-hover:scale-125
              group-hover:scale-110
              "
            >
              {feature.icon}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-2 text-white/60 leading-7">{feature.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}

      <button
        className="
        group
        mt-10
        inline-flex
        items-center
        gap-3
        rounded-full
        gold-gradient
        px-8
        py-4
        font-semibold
        text-black
        transition
        duration-300
        hover:scale-105
        "
      >
        Learn More
        <FiArrowRight className="transition group-hover:translate-x-2" />
      </button>
    </motion.div>
  );
}
