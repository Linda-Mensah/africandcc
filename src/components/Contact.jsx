import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export const Contact = () => {
  const cards = [
    {
      type: "email",
      href: "mailto:info@africandcc.org",
      icon: Mail,
      title: "Email Us",
      info: "info@africandcc.org",
      note: "Click to send email →",
    },
    {
      type: "phone",
      href: "tel:360-682-1998",
      icon: Phone,
      title: "Call Us",
      info: "360-682-1998",
      note: "Click to call →",
    },
    {
      type: "address",
      href: null,
      icon: MapPin,
      title: "Visit Us",
      info: "1717 N Street NW STE 1\nWashington, DC 20036",
      note: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#f5f0ea]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.span
            className="text-[#9B8B78] text-xs tracking-[0.3em] uppercase mb-3 inline-block"
            custom={0}
            variants={fadeUp}
          >
            Get in Touch
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-light text-[#2C2A27] mb-4"
            custom={1}
            variants={fadeUp}
          >
            Contact Us
          </motion.h2>

          <motion.div
            className="w-16 h-px bg-[#9B8B78]/30 mx-auto"
            custom={2}
            variants={fadeUp}
          />
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            const CardWrapper = card.href ? motion.a : motion.div; // use <a> if href exists else div

            return (
              <CardWrapper
                key={index}
                href={card.href || undefined}
                className={`group bg-white p-6 border border-[#9B8B78]/20 transition-colors duration-300 flex flex-col items-center text-center ${
                  card.href ? "hover:border-[#9B8B78]" : ""
                }`}
                variants={fadeUp}
                custom={index}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center mb-4 transition-colors duration-300 ${
                    card.href
                      ? "bg-[#9B8B78]/10 group-hover:bg-[#9B8B78]"
                      : "bg-[#9B8B78]/10"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      card.href
                        ? "text-[#9B8B78] group-hover:text-white"
                        : "text-[#9B8B78]"
                    }`}
                    strokeWidth={1.2}
                  />
                </div>

                <h3 className="text-sm font-medium text-[#2C2A27] mb-2 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-[#5C5548] text-sm break-all whitespace-pre-line">
                  {card.info}
                </p>
                {card.note && (
                  <span className="text-xs text-[#9B8B78] mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {card.note}
                  </span>
                )}
              </CardWrapper>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
