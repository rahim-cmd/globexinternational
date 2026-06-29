import ProcessTimeline from "./ProcessTimeline";

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#07111d] py-32">
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-2 text-sm text-yellow-300">
            OUR EXPORT PROCESS
          </div>

          <h2 className="heading-font mt-8 text-5xl font-bold leading-tight text-white">
            From Inquiry To
            <span className="block text-gradient">
              Global Delivery
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/65">
            We follow a transparent export process ensuring quality,
            compliance and timely delivery across international markets.
          </p>
        </div>

        {/* Timeline */}

        <ProcessTimeline />
      </div>
    </section>
  );
}