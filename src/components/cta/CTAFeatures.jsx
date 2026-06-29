import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiTruck,
  FiGlobe,
  FiShield,
} from "react-icons/fi";

const features = [
  {
    icon: FiCheckCircle,
    title: "Premium Export Quality",
  },
  {
    icon: FiGlobe,
    title: "Worldwide Shipping",
  },
  {
    icon: FiTruck,
    title: "Fast Logistics Support",
  },
  {
    icon: FiShield,
    title: "Trusted Export Partner",
  },
];

const CTAFeatures = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12"
    >
      {features.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-lg
              p-5
              transition-all
              duration-300
              hover:border-yellow-500/40
              hover:bg-white/10
            "
          >
            <div
              className="
                w-14
                h-14
                rounded-xl
                bg-yellow-500/10
                flex
                items-center
                justify-center
                flex-shrink-0
              "
            >
              <Icon className="text-2xl text-yellow-400" />
            </div>

            <h4
              className="
                text-white
                text-lg
                font-semibold
              "
            >
              {item.title}
            </h4>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CTAFeatures;