import WhyLeft from "./WhyLeft";
import WhyRight from "./WhyRight";

export default function WhyGlobex() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br
from-[#07111d]
via-[#081521]
to-[#07111d] py-32">
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-500/10 blur-[150px]" />

      <div className="mx-auto grid max-w-7xl gap-24 px-6 lg:grid-cols-[1fr_1fr]">
        <WhyLeft />
        <WhyRight />
      </div>
    </section>
  );
}
