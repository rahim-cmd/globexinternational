import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function GalleryCard({ item }) {
  const heightClass = {
    small: "h-[320px]",
    medium: "h-[420px]",
    large: "h-[560px]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        ${heightClass[item.size]}
        transition-all
duration-500

hover:-translate-y-2
hover:border-yellow-400/30
hover:shadow-[0_20px_60px_rgba(255,193,7,.18)]
      `}
    >
      {/* Image */}

      <img
        src={item.image}
        alt={item.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition
          duration-700
          group-hover:scale-110
        "
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#07111d] via-[#07111d]/25 to-transparent" />

      {/* Golden Glow */}

      <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-yellow-500/20 blur-[80px]" />

      {/* Content */}

      <div className="absolute bottom-0 left-0 z-10 p-8">
        <span
          className="
          inline-block
          rounded-full
          border
          border-yellow-400/40
          bg-yellow-400/10
          px-5
py-2
text-sm
backdrop-blur-xl
bg-yellow-500/15
          text-yellow-300
        "
        >
          {item.country}
        </span>

        <h3
  className={`
    heading-font
    mt-5
    text-white
    ${
      item.size === "small"
        ? "text-2xl"
        : item.size === "medium"
        ? "text-3xl"
        : "text-4xl"
    }
  `}
>{item.title}</h3>

        <button
          className="
          mt-5
          inline-flex
          items-center
          gap-2
          font-semibold
          text-yellow-400
          transition
          group-hover:gap-4
        "
        >
          View Product
          <FiArrowRight />
        </button>
      </div>
    </motion.div>
  );
}
