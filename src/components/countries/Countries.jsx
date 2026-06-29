import { motion } from "framer-motion";
import CountryCard from "./CountryCard";
import desh from "../../data/desh";

export default function Countries() {
  return (
    <section className="relative overflow-hidden bg-[#07111d] py-32">

      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-2 text-sm text-yellow-300">

            GLOBAL EXPORT NETWORK

          </div>

          <h2 className="heading-font mt-8 text-5xl font-bold text-white">

            Serving Buyers Across

            <span className="block text-gradient">

              International Markets

            </span>

          </h2>

          <p className="mt-7 text-lg leading-8 text-white/65">

            From India to the world, Globex International delivers
            premium agricultural products through trusted logistics
            and long-term business relationships.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {desh.map((item, index) => (
            <CountryCard
              key={index}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  );
}