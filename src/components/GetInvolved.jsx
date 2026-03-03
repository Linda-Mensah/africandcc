"use client";

import { HandCoins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export const GetInvolved = () => {
  const navigate = useNavigate();

  return (
    <section id="getInvolved" className="py-20 px-6 bg-[#2C2A27]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.span
          className="text-[#9B8B78] text-xs tracking-[0.3em] uppercase mb-4 inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Get Involved
        </motion.span>

        <motion.h2
          className="text-3xl md:text-4xl font-light text-[#E5D9CC] mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Join Our Community
        </motion.h2>

        <motion.p
          className="text-[#B5AA9C] text-base leading-relaxed mb-10 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          Whether you volunteer your time or make a donation, your support helps
          us strengthen African diaspora identity and empower future
          generations.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.button
            onClick={() => navigate("/jobs")}
            className="px-8 py-3 bg-transparent border border-[#9B8B78] text-[#E5D9CC] hover:bg-[#9B8B78] hover:text-[#2C2A27] transition-colors duration-300 text-sm tracking-wide min-w-40"
            variants={fadeUp}
            custom={3}
          >
            Volunteer
          </motion.button>

          <motion.a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-support-our-work-5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#9B8B78] text-[#2C2A27] hover:bg-[#E5D9CC] transition-colors duration-300 text-sm tracking-wide inline-flex items-center justify-center gap-2 min-w-40"
            variants={fadeUp}
            custom={4}
          >
            <HandCoins className="w-4 h-4" strokeWidth={1.5} />
            Donate
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
