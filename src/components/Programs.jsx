import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { programData } from "../constants/programs";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export const Programs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f0ea]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-[#9B8B78] text-xs tracking-[0.3em] uppercase mb-4 inline-block">
            Our Programs
          </span>

          <h2 className="text-4xl lg:text-5xl font-light text-[#2C2A27] mb-6">
            Empowering Communities Through Culture
          </h2>

          <p className="text-lg text-[#5C5548] leading-relaxed">
            At the African Diaspora Civic Center (ADCC), our programs are
            designed to preserve African heritage, empower young people and
            families, and strengthen the civic and economic foundation of the
            African diaspora.
          </p>

          <div className="w-16 h-px bg-[#9B8B78]/30 mx-auto mt-8"></div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {programData.map((program, index) => {
            const IconComponent = program.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className="group bg-white relative flex flex-col"
                variants={fadeUp}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${program.bgImage})` }}
                  >
                    <div className="absolute inset-0 bg-[#2C2A27]/40"></div>
                  </div>

                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <IconComponent
                        className="w-6 h-6 text-[#2C2A27]"
                        strokeWidth={1.2}
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow">
                  <motion.h3
                    layout
                    className="text-xl font-medium text-[#2C2A27] mb-4 tracking-wide"
                  >
                    {program.title}
                  </motion.h3>

                  <motion.p
                    layout
                    className={`text-[#5C5548] text-sm leading-relaxed mb-6 ${
                      isExpanded ? "" : "line-clamp-4"
                    }`}
                  >
                    {program.longDescription}
                  </motion.p>

                  {/* Toggle */}
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="text-[#9B8B78] text-xs uppercase cursor-pointer tracking-wider flex items-center gap-2 mb-6 hover:text-[#2C2A27] transition-colors"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Features */}
                  <motion.div
                    className="space-y-2 mt-auto mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                  >
                    {program.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div className="w-1 h-1 bg-[#9B8B78]"></div>
                        <span className="text-xs text-[#5C5548] uppercase tracking-wider">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-8 right-8 h-px bg-[#9B8B78]/20 group-hover:bg-[#9B8B78]/40 transition-colors"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
