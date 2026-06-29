import { motion } from "framer-motion";
import {
  Sprout,
  ShieldCheck,
  FileText,
  Ship,
} from "lucide-react";

const steps = [
  {
    icon: Sprout,
    number: "01",
    title: "Farm Sourcing",
    description:
      "We source fresh vegetables, rice and spices directly from trusted farmers and verified suppliers across India.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Quality Inspection",
    description:
      "Every shipment is carefully inspected to meet international export standards before packaging.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Export Documentation",
    description:
      "Our team manages complete export documentation, certifications and customs requirements.",
  },
  {
    icon: Ship,
    number: "04",
    title: "Worldwide Delivery",
    description:
      "Products are shipped safely through reliable logistics partners to destinations across the globe.",
  },
];

const ExportProcess = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-[#F6B91A]/5 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center max-w-3xl mx-auto"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-[#F6B91A] text-sm uppercase tracking-[2px]">

            Export Process

          </div>

          <h2 className="mt-8 font-playfair text-5xl lg:text-6xl text-white leading-tight">

            From Indian Farms

            <span className="block text-[#F6B91A]">
              To Global Markets
            </span>

          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-8">

            Every shipment follows a carefully managed export process,
            ensuring premium quality products reach international buyers
            safely and on time.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Desktop Line */}

          <div className="hidden lg:block absolute left-0 right-0 top-12 h-[2px] bg-gradient-to-r from-yellow-500/0 via-yellow-500/40 to-yellow-500/0"></div>

          <div className="grid lg:grid-cols-4 gap-8">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .6,
                    delay: index * .15,
                  }}
                  className="relative"
                >

                  {/* Circle */}

                  <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-[#1B2430] border border-[#F6B91A]/40 flex items-center justify-center shadow-lg">

                    <Icon
                      size={34}
                      className="text-[#F6B91A]"
                    />

                  </div>

                  {/* Card */}

                  <div className="mt-8 rounded-3xl bg-[#1B2430]/90 border border-white/10 p-8 text-center hover:border-[#F6B91A]/50 transition-all duration-300 hover:-translate-y-3">

                    <div className="text-[#F6B91A] text-sm tracking-[3px] mb-3">

                      STEP {step.number}

                    </div>

                    <h3 className="font-playfair text-3xl text-white">

                      {step.title}

                    </h3>

                    <p className="mt-5 text-gray-400 leading-8">

                      {step.description}

                    </p>

                  </div>

                </motion.div>

              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ExportProcess;