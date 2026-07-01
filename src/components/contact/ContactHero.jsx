import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";

import contactHero from "../../assets/images/contact/contact-hero.png";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#08111d] pt-32 pb-24">

      {/* Background Glow */}

      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm uppercase tracking-[2px] text-[#F6B91A]">

              Contact Us

            </span>

            <h1 className="mt-8 font-playfair text-5xl leading-tight text-white lg:text-7xl">

              Let's Build

              <span className="block text-[#F6B91A]">

                Global Business

              </span>

              Together

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">

              Looking for a trusted agricultural export partner from India?
              Share your requirements and our team will get back to you with
              the best possible solution.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="#contact-form"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
              >
                Send Inquiry

                <ArrowRight size={18} />

              </Link>

              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white transition hover:bg-white/10"
              >
                <PhoneCall size={18} />

                Call Now

              </a>

            </div>

            {/* Quick Contact */}

            <div className="mt-12 flex flex-wrap gap-8">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10">

                  <PhoneCall
                    className="text-[#F6B91A]"
                    size={20}
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-400">

                    Phone

                  </p>

                  <h4 className="font-semibold text-white">

                    +91 98765 43210

                  </h4>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10">

                  <Mail
                    className="text-[#F6B91A]"
                    size={20}
                  />

                </div>

                <div>

                  <p className="text-sm text-gray-400">

                    Email

                  </p>

                  <h4 className="font-semibold text-white">

                    info@globex.com

                  </h4>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src={contactHero}
              alt="Contact Globex"
              className="rounded-[40px] object-cover shadow-2xl w-[100%] h-[800px]"
            />

            {/* Floating Card */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-8 bottom-8 hidden rounded-3xl border border-white/10 bg-[#18222d]/95 p-6 backdrop-blur-xl lg:block"
            >

              <p className="text-sm text-gray-400">

                Quick Response

              </p>

              <h3 className="mt-2 text-4xl font-bold text-[#F6B91A]">

                24 Hours

              </h3>

              <p className="mt-2 text-white/80">

                Average Reply Time

              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}