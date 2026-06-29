import { motion } from "framer-motion";
import {
  Target,
  Globe2,
  Star,
  CheckCircle,
} from "lucide-react";

const CompanyStory = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,185,26,0.08),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-[#F6B91A] text-sm tracking-widest uppercase mb-8">

              <Globe2 size={16} />

              WHO WE ARE

            </div>

            {/* Heading */}

            <h2 className="font-playfair text-5xl lg:text-6xl leading-tight text-white">

              Trusted Export Partner
              <br />

              Built On{" "}
              <span className="text-[#F6B91A]">
                Quality,
              </span>

              <br />

              Integrity &

              <br />

              Long-Term Relationships

            </h2>

            {/* Paragraph */}

            <p className="mt-8 text-gray-300 text-lg leading-9">

              Globex International connects premium Indian agricultural
              products with buyers across the world.

              From sourcing directly from trusted farms to handling export
              documentation and international logistics, we ensure every
              shipment meets international quality standards.

              <br />
              <br />

              Our focus is simple — deliver reliable products,
              transparent communication and long-term business
              relationships that help our global partners grow with
              confidence.

            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div

            initial={{ opacity: 0, x: 60 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            transition={{ duration: .8 }}

            className="space-y-6"

          >

            {/* Mission */}

            <div className="bg-[#1B2430]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#F6B91A]/50 transition-all duration-300 hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-[#F6B91A]/10 flex items-center justify-center mb-6">

                <Target className="text-[#F6B91A]" size={28} />

              </div>

              <h3 className="font-playfair text-3xl text-white mb-4">

                Our Mission

              </h3>

              <p className="text-gray-400 leading-8">

                Deliver premium agricultural products worldwide through
                trusted sourcing, strict quality assurance and dependable
                export solutions.

              </p>

            </div>

            {/* Vision */}

            <div className="bg-[#1B2430]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#F6B91A]/50 transition-all duration-300 hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-[#F6B91A]/10 flex items-center justify-center mb-6">

                <Globe2 className="text-[#F6B91A]" size={28} />

              </div>

              <h3 className="font-playfair text-3xl text-white mb-4">

                Our Vision

              </h3>

              <p className="text-gray-400 leading-8">

                Become one of India's most trusted agricultural export
                partners by building long-term relationships with buyers
                across global markets.

              </p>

            </div>

            {/* Values */}

            <div className="bg-[#1B2430]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#F6B91A]/50 transition-all duration-300 hover:-translate-y-2">

              <div className="w-16 h-16 rounded-2xl bg-[#F6B91A]/10 flex items-center justify-center mb-6">

                <Star className="text-[#F6B91A]" size={28} />

              </div>

              <h3 className="font-playfair text-3xl text-white mb-6">

                Core Values

              </h3>

              <div className="space-y-4">

                {[
                  "Quality First",
                  "Transparency",
                  "Long-Term Partnership",
                  "Customer Satisfaction",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-300"
                  >

                    <CheckCircle
                      size={18}
                      className="text-[#F6B91A]"
                    />

                    {item}

                  </div>

                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CompanyStory;