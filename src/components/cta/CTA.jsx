import CTALeft from "./CTALeft";
import CTARight from "./CTARight";

export default function CTA() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#07111d]
      py-32
      "
    >
      {/* Top Divider */}

      <div
        className="
        absolute
        top-0
        left-1/2
        h-px
        w-[90%]
        -translate-x-1/2
        bg-gradient-to-r
        from-transparent
        via-yellow-400/40
        to-transparent
        "
      />

      {/* Background Glow */}

      <div
        className="
        absolute
        -left-24
        top-20
        h-80
        w-80
        rounded-full
        bg-yellow-500/10
        blur-[140px]
        "
      />

      <div
        className="
        absolute
        -right-24
        bottom-0
        h-96
        w-96
        rounded-full
        bg-green-500/10
        blur-[160px]
        "
      />

      {/* Grid */}

      <div
        className="
        relative
        z-10
        mx-auto
        max-w-7xl
        px-6

        grid
        items-center
        gap-20

        lg:grid-cols-[1.1fr_.9fr]
        "
      >
        <CTALeft />

        <CTARight />
      </div>
    </section>
  );
}