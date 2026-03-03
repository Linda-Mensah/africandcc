import { useState } from "react";
import {
  MapPin,
  ArrowRight,
  Sparkles,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { jobs } from "../constants/jobs";
import { reasons } from "../constants/reasons";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export const Jobs = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f0ea]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="mb-16"
        >
          <motion.span
            className="text-[#9B8B78] font-bold text-xs tracking-[0.3em] uppercase block my-4"
            variants={fadeUp}
            custom={0}
          >
            Careers
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#2C2A27] mb-6 leading-tight"
            variants={fadeUp}
            custom={1}
          >
            Join Us in Building Community
          </motion.h1>

          <motion.div
            className="prose prose-stone max-w-3xl"
            variants={fadeUp}
            custom={2}
          >
            <p className="text-[#5C5548] text-lg leading-relaxed mb-4">
              At ADCC, we are building a vibrant, inclusive, and culturally
              grounded community hub for African diaspora children, youth, and
              families. Our work is driven by passion, collaboration, and a
              shared commitment to cultural preservation, community empowerment,
              and racial equity.
            </p>
            <p className="text-[#5C5548] text-lg leading-relaxed mb-4">
              If you are inspired by our mission and eager to make a meaningful
              impact, we invite you to explore the opportunities below.
            </p>
            <p className="text-[#9B8B78] italic mt-4">
              Together, we are strengthening identity, empowering generations,
              and building community.
            </p>
          </motion.div>
        </motion.div>

        {/* Open Opportunities */}
        <div className="mb-20">
          <motion.h2
            className="text-2xl font-bold text-[#2C2A27] mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-8 h-px bg-[#9B8B78]/30"></span>
            Open Opportunities
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {jobs.map((job, index) => {
              const Icon = job.icon;
              const isExpanded = expandedId === job.id;

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-[#9B8B78]/20"
                >
                  {/* Card Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#9B8B78]/10 flex items-center justify-center">
                          <Icon
                            className="w-6 h-6 text-[#9B8B78]"
                            strokeWidth={1.2}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-[#2C2A27] mb-2">
                            {job.id}. {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            <span className="text-xs text-[#5C5548] bg-[#f5f0ea] px-3 py-1">
                              {job.type}
                            </span>
                            <span className="text-xs text-[#5C5548] flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleExpand(job.id)}
                        className="text-[#9B8B78] hover:text-[#2C2A27] cursor-pointer transition-colors p-2"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <p className="text-[#5C5548] text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-[#9B8B78]/10 pt-6">
                            <h4 className="text-sm font-medium text-[#2C2A27] mb-4 flex items-center gap-2">
                              <FileText
                                className="w-4 h-4 text-[#9B8B78]"
                                strokeWidth={1.2}
                              />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-3">
                              {job.responsibilities.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-sm text-[#5C5548]"
                                >
                                  <span className="w-1.5 h-1.5 bg-[#9B8B78] rounded-full mt-2"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* How to Apply */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#2C2A27] mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-[#9B8B78]/30"></span>
            How to Apply
          </h2>

          <div className="bg-[#2C2A27] p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div>
                <h3 className="text-lg font-light text-[#E5D9CC] mb-4">
                  Application Requirements
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-[#B5AA9C]">
                    <span className="w-1 h-1 bg-[#9B8B78]"></span>
                    <span className="text-sm">Resume (required)</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#B5AA9C]">
                    <span className="w-1 h-1 bg-[#9B8B78]"></span>
                    <span className="text-sm">Cover letter (optional)</span>
                  </li>
                </ul>
                <p className="text-xs text-[#9B8B78]">
                  All positions are currently unpaid. Internship positions offer
                  academic credit for eligible students.
                </p>
              </div>

              <div className="md:text-right">
                <p className="text-sm text-[#E5D9CC] mb-3">
                  Send applications to:
                </p>
                <a
                  href="mailto:jobs@africandcc.org"
                  className="inline-flex items-center gap-2 text-xl text-[#E5D9CC] hover:text-white transition-colors group border-b border-[#9B8B78]/30 pb-1"
                >
                  jobs@africandcc.org
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    strokeWidth={1.2}
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Join ADCC */}
        <motion.div
          className="my-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#2C2A27] mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-[#9B8B78]/30"></span>
            Why Join ADCC?
          </h2>

          <div className="bg-white p-8 border border-[#9B8B78]/20">
            <div className="flex items-start gap-4 mb-6">
              <Sparkles
                className="w-6 h-6 text-[#9B8B78] shrink-0"
                strokeWidth={1.2}
              />
              <p className="text-[#5C5548] text-sm leading-relaxed">
                Be part of something meaningful. Here's what you'll gain by
                joining our team:
              </p>
            </div>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-[#5C5548]"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-[#9B8B78] font-light">✦</span>
                  <span className="text-sm">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
