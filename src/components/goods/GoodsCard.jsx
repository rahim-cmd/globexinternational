import { ArrowRight, MapPin } from "lucide-react";

export default function GoodsCard({ item }) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-[30px]
      border
      border-white/10
      bg-[#131d29]
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-[#F6B91A]/40
      "
    >

      {/* Image */}

      <div className="overflow-hidden">

        <img
          src={item.image}
          alt={item.title}
          className="
          h-72
          w-full
          object-cover
          transition
          duration-700
          group-hover:scale-110
          "
        />

      </div>

      {/* Content */}

      <div className="p-7">

        <span
          className="
          inline-block
          rounded-full
          bg-[#F6B91A]/10
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[2px]
          text-[#F6B91A]
          "
        >
          {item.category}
        </span>

        <h3 className="mt-5 text-3xl font-bold text-white">

          {item.title}

        </h3>

        <p className="mt-4 leading-8 text-gray-400">

          {item.description}

        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-gray-300">

          <MapPin size={16} />

          {item.origin}

        </div>

        <button
          className="
          mt-8
          flex
          items-center
          gap-2
          font-semibold
          text-[#F6B91A]
          transition
          group-hover:gap-4
          "
        >
          Request Quote

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}