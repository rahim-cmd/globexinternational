import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  Globe2,
  Clock3,
  Truck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description:
      "We export carefully selected agricultural products that meet international quality standards.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Documentation",
    description:
      "Complete export paperwork, certifications and customs documentation handled professionally.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    description:
      "Supplying trusted buyers across multiple international markets with dependable service.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Efficient logistics planning ensures timely dispatch and delivery of every shipment.",
  },
  {
    icon: Truck,
    title: "Safe Logistics",
    description:
      "Partnering with reliable freight providers for secure worldwide transportation.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "Building strong business relationships based on transparency, trust and consistency.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-[#F6B91A]/5 blur-[170px] rounded-full"></div>
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

          <div className="inline-flex items-center px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-[#F6B91A] uppercase tracking-[2px] text-sm">

            Why Choose Globex

          </div>

          <h2 className="mt-8 font-playfair text-5xl lg:text-6xl text-white leading-tight">

            Export Excellence

            <span className="block text-[#F6B91A]">

              You Can Trust

            </span>

          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-8">

            We combine quality sourcing, export expertise and dependable
            logistics to deliver premium agricultural products across
            international markets.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                className="group bg-[#1B2430]/90 border border-white/10 rounded-3xl p-8 hover:border-[#F6B91A]/50 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#F6B91A]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">

                  <Icon
                    className="text-[#F6B91A]"
                    size={30}
                  />

                </div>

                <h3 className="font-playfair text-3xl text-white mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-400 leading-8">

                  {item.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;