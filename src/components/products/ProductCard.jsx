import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function ProductCard({ product, large }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className={`
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      ${large ? "h-[540px]" : "h-[260px]"}
      `}
    >
      <img
        src={product.image}
        alt={product.title}
        className="
        h-full
        w-full
        object-cover
        transition
        duration-700
        group-hover:scale-110
        "
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

      {/* Badge */}

      <div
        className="
        absolute
        left-5
        top-5
        rounded-full
        bg-yellow-500/90
        px-4
        py-1
        text-xs
        font-semibold
        text-black
        "
      >
        {product.badge}
      </div>

      {/* Content */}

      <div className="absolute bottom-0 left-0 w-full p-8">

        <h3 className="heading-font text-3xl text-white">
          {product.title}
        </h3>

        <p className="mt-3 text-white/70 leading-7">
          {product.description}
        </p>

        <button
          className="
          mt-6
          flex
          items-center
          gap-2
          text-yellow-400
          font-semibold
          "
        >
          View Product

          <FiArrowRight className="transition group-hover:translate-x-2" />
        </button>

      </div>
    </motion.div>
  );
}