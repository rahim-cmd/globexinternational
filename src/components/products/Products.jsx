import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import products from "../../data/products";

export default function Products() {
  return (
    <section className="relative overflow-hidden bg-[#07111d] py-32">

      {/* Background Glow */}

      <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-green-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm text-yellow-300">

            OUR PRODUCTS

          </div>

          <h2 className="heading-font mt-8 text-5xl font-bold text-white">

            Exporting India's

            <span className="block text-gradient">

              Finest Agricultural Products

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-white/65">

            Carefully sourced from trusted farmers and processed to meet
            international quality standards.

          </p>

        </motion.div>

        {/* Grid */}

        <div className="grid gap-6 lg:grid-cols-2">

          <ProductCard product={products[0]} large />

          <ProductCard product={products[1]} />

          <ProductCard product={products[2]} />

          <ProductCard product={products[3]} large />

        </div>

      </div>

    </section>
  );
}