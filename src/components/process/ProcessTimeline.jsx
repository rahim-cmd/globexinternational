import { motion } from "framer-motion";
import process from "../../data/process";
import ProcessCard from "./ProcessCard";

export default function ProcessTimeline() {
  return (
    <div className="relative mt-24">
      {/* Line */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ originX: 0 }}
        className="absolute left-0 right-0 top-10 hidden h-[2px] bg-yellow-500/60 lg:block"
      />

      <div className="grid gap-10 lg:grid-cols-5">
        {process.map((step, index) => (
          <ProcessCard
            key={index}
            step={step}
            delay={index * 0.15}
          />
        ))}
      </div>
    </div>
  );
}