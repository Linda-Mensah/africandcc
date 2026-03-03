import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    style={{
      backgroundImage: 'url("/adcc-hero-img.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Refined overlay with better depth */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.65 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 bg-black/70"
    ></motion.div>

    {/* Smoother gradient overlay */}
    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-black/20"></div>

    <div className="relative max-w-5xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="inline-block px-5 py-2 md:py-4 mt-20 md:mt-10 text-xs tracking-[0.2em] text-white/80 border border-white/20 backdrop-blur-sm rounded-none">
          AFRICAN DIASPORA CIVIC CENTER
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl md:text-7xl font-medium mb-6 leading-tight"
      >
        <span className="text-white/90">Celebrating</span>{" "}
        <span className="text-amber-500">Heritage</span>
        <br />
        <span className="text-white/90">Inspiring</span>{" "}
        <span className="text-white/60 font-light">Change</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-3xl mx-auto text-lg md:text-xl mb-12 leading-relaxed text-white/80 font-light"
      >
        Strengthening Our Global African Identity through cultural preservation,
        community engagement, and leadership development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-5 justify-center items-center py-3"
      >
        <a
          href="#about"
          className="group px-10 py-3 bg-[#9B8B78] text-[#2C2A27] transition-all ease-in-out duration-500 hover:bg-[#E5D9CC] tracking-wide"
        >
          <span className="font-medium flex items-center gap-2">
            Learn More{" "}
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              strokeWidth={1.5}
            />
          </span>
        </a>
        <a
          href="#getInvolved"
          className="group px-10 py-3 border border-white/30 text-white hover:bg-white hover:text-[#2C2A27] transition-all ease-in-out duration-300 tracking-wide"
        >
          Get Involved
        </a>
      </motion.div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-linear-to-b from-transparent via-amber-500/50 to-transparent"></div>
      </motion.div>
    </div>
  </section>
);
