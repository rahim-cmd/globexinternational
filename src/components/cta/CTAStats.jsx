import { motion } from "framer-motion";
import {
  FiGlobe,
  FiPackage,
  FiUsers,
  FiAward,
} from "react-icons/fi";

const stats = [
  {
    icon: FiGlobe,
    number: "15+",
    label: "Countries Served",
  },
  {
    icon: FiPackage,
    number: "100+",
    label: "Export Products",
  },
  {
    icon: FiUsers,
    number: "500+",
    label: "Global Buyers",
  },
  {
    icon: FiAward,
    number: "10+",
    label: "Years Experience",
  },
];

const CTAStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="
      relative
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-yellow-500/10
        via-transparent
        to-green-500/10
        "
      />

      <div className="relative z-10">

        <h3
          className="
          text-3xl
          font-serif
          text-white
          mb-2
          "
        >
          Export At Scale
        </h3>

        <p
          className="
          text-gray-400
          mb-8
          "
        >
          Trusted by international buyers looking for reliable
          agricultural exports from India.
        </p>

        <div className="grid grid-cols-2 gap-5">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                transition
                duration-300
                hover:border-yellow-500/40
                hover:bg-white/10
                "
              >
                <Icon
                  className="
                  text-yellow-400
                  text-3xl
                  mb-4
                  "
                />

                <h4
                  className="
                  text-3xl
                  font-bold
                  text-white
                  "
                >
                  {item.number}
                </h4>

                <p
                  className="
                  text-gray-400
                  mt-2
                  "
                >
                  {item.label}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </motion.div>
  );
};

export default CTAStats;