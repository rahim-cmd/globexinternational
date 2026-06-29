import { motion } from "framer-motion";
import cta from "../../data/cta";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function CTALeft() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Badge */}

      <motion.div
        variants={item}
        className="
        inline-flex
        rounded-full
        border
        border-yellow-400/30
        bg-yellow-400/10
        px-5
        py-2
        text-sm
        text-yellow-300
        backdrop-blur-xl
        "
      >
        START YOUR IMPORT JOURNEY
      </motion.div>

      {/* Heading */}

      <motion.h2
        variants={item}
        className="
        heading-font
        mt-8
        text-5xl
        font-bold
        leading-tight
        text-white
        lg:text-6xl
        "
      >
        Ready To Import

        <span className="block text-gradient">

          Premium Products

        </span>

        From India?
      </motion.h2>

      {/* Description */}

      <motion.p
        variants={item}
        className="
        mt-8
        max-w-2xl
        text-lg
        leading-9
        text-white/65
        "
      >
        Whether you're looking for fresh vegetables, premium rice,
        authentic spices or customized export solutions, our team
        is ready to help you source high-quality agricultural
        products with complete export documentation and dependable
        worldwide logistics.
      </motion.p>

      {/* Trust Points */}

      <motion.div
        variants={container}
        className="mt-10 grid gap-5 sm:grid-cols-2"
      >
        {cta.map((point, index) => {
          const Icon = point.icon;

          return (
            <motion.div
              key={index}
              variants={item}
              className="
              glass
              flex
              items-center
              gap-4
              rounded-2xl
              p-4
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-yellow-400/30
              "
            >
              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-yellow-500/10
                text-xl
                text-yellow-400
                "
              >
                <Icon />
              </div>

              <span className="font-medium text-white">
                {point.text}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}