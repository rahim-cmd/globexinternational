import { motion } from "framer-motion";

export default function ProcessCard({ step, delay }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{ once: true }}
      className="relative text-center"
    >
      {/* Icon */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500/30 bg-[#07111d] text-4xl text-yellow-400"
      >
        <Icon />
      </motion.div>

      {/* Card */}

      <div
        className="
          glass
          mt-8
          rounded-3xl
          p-8
          transition-all
          duration-500
          hover:-translate-y-3
          hover:border-yellow-400/30
          hover:shadow-[0_20px_50px_rgba(255,193,7,.15)]
        "
      >
        <h3 className="text-2xl font-semibold text-white">
          {step.title}
        </h3>

        <p className="mt-4 leading-8 text-white/60">
          {step.text}
        </p>
      </div>
    </motion.div>
  );
}