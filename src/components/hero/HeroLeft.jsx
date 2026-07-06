import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import stats from "../../data/stats";
import CountUp from "react-countup";
import { Navigate, useNavigate } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function HeroLeft() {

  const navigate = useNavigate();

  const gotoProducts = ()=>{
    navigate('/products')
  }
  const gotoContact = ()=>{
    navigate('/contact')
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-3xl"
    >
      {/* Badge */}

      <motion.div
        variants={item}
        className="inline-flex items-center gap-3 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm text-yellow-300 backdrop-blur-md"
      >
        <FiGlobe />
        Exporting Premium Indian Agricultural Products
      </motion.div>

      {/* Heading */}

      <motion.h1
        variants={item}
        className="heading-font hero-shadow mt-8 text-6xl font-bold leading-none text-white lg:text-7xl"
      >
        Connecting
        <span className="block text-gradient">Indian Farms</span>
        To Global Markets
      </motion.h1>

      {/* Paragraph */}

      <motion.p
        variants={item}
        className="mt-8 max-w-xl text-lg leading-9 text-white/75"
      >
        Globex International delivers premium spices, onions, potatoes, rice and
        agricultural products from trusted Indian suppliers to buyers across the
        globe with dependable logistics and uncompromising quality.
      </motion.p>

      {/* Buttons */}

      <motion.div variants={item} className="mt-10 flex flex-wrap gap-5">
        <button
          className="
          group
          gold-gradient
          rounded-full
          px-8
          py-4
          font-bold
          text-black
          transition
          duration-300
          hover:scale-105
          hover:shadow-2xl
          hover:shadow-yellow-500/30
          "
          onClick={gotoProducts}
        >
          Explore Products
          <FaArrowRight className="ml-3 inline transition group-hover:translate-x-2" />
        </button>

        <button
          className="
          glass
          rounded-full
          px-8
          py-4
          text-white
          transition
          hover:bg-white
          hover:text-black
          "
          onClick={gotoContact}
        >
          Request Quote
        </button>
      </motion.div>

      {/* Stats */}

      <motion.div
        variants={item}
        className="mt-16 grid grid-cols-3 gap-5"
      >
        {[
          ["15+", "Countries"],
          ["100+", "Products"],
          ["24/7", "Support"],
        ].map(([number, title]) => (
          <div
            key={title}
            className="glass rounded-3xl p-5"
          >
            <h2 className="text-4xl font-bold text-yellow-400">
              {number}
            </h2>

            <p className="mt-2 text-white/70">
              {title}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
