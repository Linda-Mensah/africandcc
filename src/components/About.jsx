import { motion } from "framer-motion";
import { coreValues } from "../constants/coreValues";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 lg:py-32 px-4 md:px-10 bg-[#faf7f2] overflow-hidden"
    >
      {/* Background blur elements  */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#e8d9c5] rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#d9c5b3] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-block text-[#8b6f4c] text-xs tracking-[0.3em] uppercase mb-4">
            — Our Identity —
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-[#3a322a] mb-6">
            Who We Are
          </h2>

          <div className="w-16 md:w-24 h-0.5 bg-[#b89b7a] mx-auto" />
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            className="space-y-8 md:space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-[#3a322a] leading-relaxed font-light italic">
              <span className="text-[#b89b7a] text-4xl md:text-6xl font-serif mr-2">
                “
              </span>
              The African Diaspora Civic Center (ADCC) serves as a bridge
              between Africa and its diaspora—a gathering place where culture,
              history, and innovation converge.
            </p>

            {/* Symbol Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute -inset-1 bg-linear-to-r from-[#b89b7a]/20 to-[#8b6f4c]/20 blur-lg"></div>

              <div className="relative bg-white p-6 md:p-8 shadow-xl">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src="/cultural-preservation.jpg"
                        alt="Cultural preservation"
                        className="w-full h-full object-cover transition-all duration-700"
                      />
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <span className="text-4xl md:text-5xl text-[#b89b7a] block mb-4 font-serif">
                      𓆧
                    </span>

                    <p className="text-[#5a4a3a] leading-relaxed text-sm md:text-base">
                      At our core is the Adinkra symbol
                      Funtunfunefu-Denkyemfunefu, two Siamese crocodiles sharing
                      one stomach. It reminds us that{" "}
                      <span className="font-medium text-[#3a322a]">
                        we share one destiny and one heritage.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <p className="text-[#5a4a3a] leading-relaxed text-sm tracking-wide">
              Through our work in civic engagement, cultural preservation, youth
              empowerment, and community development, ADCC strengthens the bonds
              that unite Africans everywhere.
            </p>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="lg:sticky lg:top-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#3a322a] -rotate-1 scale-105"></div>

              <div className="relative bg-[#2a241f] p-6 sm:p-8 md:p-12 rotate-1 hover:rotate-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-light text-[#e8d9c5] mb-8 md:mb-12 tracking-wide">
                  Core Values
                </h3>

                <div className="space-y-6 md:space-y-10">
                  {coreValues.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={index}
                        className="flex gap-4 md:gap-6 items-start border-b border-[#5a4a3a]/30 pb-6 last:border-0"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#3a322a] flex items-center justify-center">
                          <Icon
                            className="w-5 h-5 md:w-6 md:h-6 text-[#b89b7a]"
                            strokeWidth={1.2}
                          />
                        </div>

                        <div>
                          <h4 className="text-lg md:text-xl text-[#e8d9c5] mb-1 font-light tracking-wide">
                            {item.title}
                          </h4>
                          <p className="text-[#a89b8a] text-sm">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-10 pt-6 border-t border-[#5a4a3a]/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
