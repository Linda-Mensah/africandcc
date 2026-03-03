import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export const MissionVision = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#f5f0ea]">
      <div className="absolute inset-0 bg-[#2C2A27]/2"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#9B8B78] text-xs tracking-[0.3em] uppercase">
            Our Direction
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="bg-white p-12 md:p-16 h-full relative">
              <Target className="w-10 h-10 text-[#9B8B78]/20 absolute top-8 right-8" />

              <h3 className="text-3xl md:text-4xl font-light text-[#2C2A27] mb-8">
                Mission
              </h3>

              <p className="text-xl md:text-2xl text-[#5C5548] leading-relaxed font-light">
                To connect and empower people of African descent in the United
                States through civic engagement, cultural preservation,
                education, and community development.
              </p>

              {/* Simple line accent */}
              <div className="mt-12 w-12 h-px bg-[#9B8B78]/30"></div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="bg-[#2C2A27] p-12 md:p-16 h-full relative">
              <Eye className="w-10 h-10 text-[#E5D9CC]/20 absolute top-8 right-8" />

              <h3 className="text-3xl md:text-4xl font-light text-[#E5D9CC] mb-8">
                Vision
              </h3>

              <p className="text-xl md:text-2xl text-[#B5AA9C] leading-relaxed font-light">
                To build a united and thriving African diaspora community, one
                that celebrates its roots, amplifies its voice, and shapes a
                shared future of progress and pride.
              </p>

              {/* Simple line accent */}
              <div className="mt-12 w-12 h-px bg-[#E5D9CC]/30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
