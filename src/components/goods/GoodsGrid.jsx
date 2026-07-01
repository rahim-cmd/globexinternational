import { motion } from "framer-motion";

import goods from "../../data/goods";
import GoodsCard from "./GoodsCard";

export default function GoodsGrid() {
  return (
    <section className="pb-28">

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
          grid
          gap-8
          sm:grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          "
        >

          {goods.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              viewport={{ once: true }}
            >

              <GoodsCard item={item} />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}