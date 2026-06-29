import { motion } from "framer-motion";
import countries from "../../data/countries";
import {
  FiGlobe,
  FiMapPin,
  FiPackage,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";



export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative hidden lg:block"
    >
      {/* Glow */}

      <div className="absolute -inset-6 rounded-[40px] bg-yellow-500/20 blur-3xl"></div>

      {/* Card */}

      <div className="glass relative w-[410px] rounded-[35px] p-8">

        {/* Top */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-white/60 text-sm">
              GLOBAL EXPORT
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Live Network
            </h2>

          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-black">

            <FiGlobe size={28} />

          </div>

        </div>

        {/* Countries */}

        <div className="mt-8 space-y-4">

          {countries.map((country, index) => (

            <motion.div
              key={country.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                x: 8,
              }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
            >

              <div className="flex items-center gap-4">

                <span className="text-2xl">

                  {country.flag}

                </span>

                <div>

                  <h4 className="font-semibold text-white">

                    {country.name}

                  </h4>

                  <p className="text-sm text-white/50">

                    Active Buyer

                  </p>

                </div>

              </div>

              <FiCheckCircle className="text-green-400" size={22} />

            </motion.div>

          ))}

        </div>

        {/* Bottom Cards */}

        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-white/5 p-5">

            <FiPackage className="text-yellow-400" size={26} />

            <h3 className="mt-4 text-3xl font-bold text-white">

              250+

            </h3>

            <p className="text-white/60">

              Shipments

            </p>

          </div>

          <div className="rounded-2xl bg-white/5 p-5">

            <FiTrendingUp className="text-green-400" size={26} />

            <h3 className="mt-4 text-3xl font-bold text-white">

              99%

            </h3>

            <p className="text-white/60">

              On-Time Delivery

            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-8 flex items-center justify-between rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-400 p-5">

          <div>

            <p className="text-sm text-black/70">

              Current Status

            </p>

            <h3 className="text-xl font-bold text-black">

              Export Active

            </h3>

          </div>

          <motion.div
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="flex items-center gap-2"
          >

            <span className="h-3 w-3 rounded-full bg-green-600"></span>

            <span className="font-semibold text-black">

              LIVE

            </span>

          </motion.div>

        </div>

      </div>
    </motion.div>
  );
}