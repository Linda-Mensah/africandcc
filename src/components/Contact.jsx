import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white text-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-serif text-gray-900">
            Contact Us
          </h2>
          <div className="w-24 h-0.5 bg-amber-800 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left form section */}
          <div className="bg-gray-50 rounded-none p-10 shadow-sm border border-gray-300">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 font-serif">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="border border-gray-300 p-4 rounded-none focus:ring-2 focus:ring-amber-800 focus:border-transparent bg-white transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="border border-gray-300 p-4 rounded-none focus:ring-2 focus:ring-amber-800 focus:border-transparent bg-white transition-all duration-300"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-gray-300 p-4 rounded-none focus:ring-2 focus:ring-amber-800 focus:border-transparent bg-white transition-all duration-300"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-gray-300 p-4 rounded-none h-40 focus:ring-2 focus:ring-amber-800 focus:border-transparent bg-white transition-all duration-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-amber-800 text-white py-4 rounded-none font-semibold text-lg transition-all duration-300 border-2 border-gray-900 hover:border-amber-800"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right contact info section - now single card matching form height */}
          <div className="bg-gray-50 rounded-none p-10 shadow-sm border border-gray-300 h-full">
            <h3 className="text-2xl font-bold mb-10 text-gray-900 font-serif">
              Contact Information
            </h3>
            <div className="space-y-8">
              {[
                {
                  icon: <MapPin />,
                  text: "1717 N Street NW STE 1, Washington, DC 20036",
                },
                { icon: <Phone />, text: "360-682-1998" },
                { icon: <Mail />, text: "info@africandcc.org" },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-5">
                  <span className="text-2xl text-amber-800 mt-1">
                    {item.icon}
                  </span>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
