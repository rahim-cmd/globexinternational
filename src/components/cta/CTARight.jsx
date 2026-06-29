import { motion } from "framer-motion";
import CTAStats from "./CTAStats";

export default function CTARight() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Floating Glow */}

      <div
        className="
        absolute
        -top-16
        -right-16
        h-52
        w-52
        rounded-full
        bg-yellow-500/10
        blur-[120px]
        "
      />

      <div
        className="
        absolute
        -bottom-16
        -left-10
        h-44
        w-44
        rounded-full
        bg-green-500/10
        blur-[120px]
        "
      />

      {/* Floating Card */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <CTAStats />
      </motion.div>

      {/* Floating Badge */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        glass
        absolute
        -right-10
        z-30
        top-5
        rounded-2xl
        px-6
        py-5
        hidden
        lg:block
        "
      >
        <p className="text-sm text-white/60">

          Trusted By

        </p>

        <h3 className="mt-1 text-3xl font-bold text-yellow-400">

          15+

        </h3>

        <span className="text-white/80">

          Countries

        </span>

      </motion.div>

    </motion.div>
  );
}