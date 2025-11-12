// src/App.jsx
import {
  Bell,
  Globe,
  HandCoins,
  HelpingHand,
  Home,
  Mail,
  Mailbox,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <img
          className="w-12 h-12 object-cover"
          src="/adcc-logo-transparent.png"
        />
        {/* <h1 className="text-2xl font-bold text-gray-900 font-serif">LOGO</h1> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Who We Are", "Programs", "Events", "Store", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 hover:text-amber-800 font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-800 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6">
          <div className="flex flex-col space-y-4">
            {[
              "Home",
              "Who We Are",
              "Programs",
              "Events",
              "Store",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 hover:text-amber-800 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section
    id="home"
    className="relative bg-gray-50 text-gray-900 text-center py-40 px-6 overflow-hidden border-b border-gray-200"
    style={{
      backgroundImage: 'url("/adcc-hero-img.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-serif text-white">
        Celebrating <span className=" text-amber-800">Heritage</span>.
        <br />
        Inspiring <span className="text-gray-200">Change</span>.
      </h1>
      <p className="max-w-2xl mx-auto text-xl mb-10 leading-relaxed text-gray-100">
        Strengthening Our Global African Identity through cultural preservation,
        community engagement, and leadership development.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#about"
          className="bg-gray-900 hover:bg-amber-800 text-white px-8 py-4 rounded-none font-semibold text-lg transition-all duration-300 border-2 border-gray-900 hover:border-amber-800"
        >
          Learn More
        </a>
        <a
          href="#contact"
          className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-none font-semibold text-lg transition-all duration-300"
        >
          Get Involved
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section
    id="about"
    className="py-20 px-6 bg-white text-gray-800 border-b border-gray-200"
  >
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-serif text-gray-900">
          Who We Are
        </h2>
        <div className="w-24 h-0.5 bg-amber-800 mx-auto mb-6"></div>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-600">
          ADCC serves as a bridge between Africa and its diaspora, a gathering
          place where culture, history, and innovation come together to inspire
          shared progress. <br /> At the heart of our story is the Adinkra
          symbol Funtunfunefu-Denkyemfunefu, two Siamese crocodiles sharing one
          stomach. It reminds us that though we may live in different parts of
          the world, we share one destiny and one heritage. <br />
          Through our work in civic engagement, cultural preservation, youth
          empowerment, and community development, ADCC strengthens the bonds
          that unite Africans everywhere, celebrating our collective story,
          honoring our ancestors, and creating opportunities for the generations
          to come.
        </p>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-900 font-serif">
          Our Core Programs
        </h3>
        <div className="w-20 h-0.5 bg-amber-800 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2  gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Civic Engagement",
            description:
              "We encourage active participation and leadership within local communities, ensuring African diaspora voices are represented in social, economic, and political spaces across the United States.",
            icon: <Mailbox />,
          },
          {
            title: "Cultural Preservation",
            description:
              "We celebrate African heritage through art, storytelling, and community gatherings. ADCC also organizes classes in African history, language, and traditional dance helping both youth and adults reconnect with their cultural identity and pass it on to future generations.",
            icon: <Globe />,
          },
          {
            title: "Youth Empowerment",
            description:
              "We nurture the next generation of African-descendant leaders through mentorship,workshops, and skills training in technology, entrepreneurship, and creative leadership.",
            icon: <Star />,
          },
          {
            title: "Community Development",
            description:
              "We collaborate with organizations, educators, and local leaders to expand access to opportunities in education, employment, and social welfare, building stronger, more resilient communities.",
            icon: <Home />,
          },
        ].map((program, index) => (
          <div
            key={index}
            className=" rounded-none p-8 bg-amber-50 transition-all duration-300 border border-gray-300 hover:border-amber-800 group"
          >
            <div className="w-16 h-16 rounded-none bg-gray-900 group-hover:bg-amber-800 flex items-center justify-center text-2xl text-white mb-6 transition-colors duration-300">
              {program.icon}
            </div>
            <h4 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-amber-800 transition-colors duration-300">
              {program.title}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-20 px-6 bg-white text-[#1A1A1A]">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-10">Our Mission & Vision</h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-[#FAF9F6] p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-[#111111]">
              Our Mission
            </h3>
            <p className="text-lg text-[#444] leading-relaxed">
              To connect and empower people of African descent in the United
              States through civic engagement, cultural preservation, education,
              and community development.
            </p>
          </div>

          <div className="bg-[#DCC7AA] p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-[#111111]">
              Our Vision
            </h3>
            <p className="text-lg text-[#111111] leading-relaxed">
              To build a united and thriving African diaspora community, one
              that celebrates its roots, amplifies its voice, and shapes a
              shared future of progress and pride.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const GetInvolved = () => (
  <section className="py-20 bg-gray-900 text-white text-center relative overflow-hidden border-b border-gray-800">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="relative max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-6 font-serif">Get Involved</h2>
      <div className="w-24 h-0.5 bg-amber-600 mx-auto mb-8"></div>
      <p className="max-w-3xl mx-auto mb-12 text-xl text-gray-300">
        Join our growing community of changemakers, educators, and cultural
        advocates. Whether you’re a volunteer, partner, or supporter, your
        involvement helps us strengthen our shared heritage and empower our
        future.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        {[
          { label: "Volunteer", icon: <HelpingHand /> },
          { label: "Donate", icon: <HandCoins /> },
          { label: "Subscribe", icon: <Bell /> },
        ].map((action, index) => (
          <button
            key={index}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-amber-800 hover:border-amber-800 text-white px-8 py-4 rounded-none font-semibold text-lg transition-all duration-300 flex items-center gap-3 min-w-40 justify-center hover:scale-105"
          >
            <span className="text-xl">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  </section>
);

const Programs = () => (
  <section
    id="programs"
    className="py-20 px-6 bg-gray-50 text-gray-800 border-b border-gray-300"
  >
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-serif text-gray-900">
          Our Programs
        </h2>
        <div className="w-24 h-0.5 bg-amber-800 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {[
          {
            title: "Civic Engagement",
            description:
              "We believe in the power of active participation to empoer the African diaspora in the US to make a difference locally and nationally",
            features: [
              "Community Leadership",
              "Voter Education",
              "Policy Advocacy",
            ],
          },
          {
            title: "Cultural Preservation",
            description:
              "Our Cultural Preservation initiative is at the heart of ADCC's mission. Our programs seek to reconnect African descendants with their cultural roots.",
            features: [
              "Art Exhibitions",
              "Storytelling Events",
              "Cultural Workshops",
            ],
          },
          {
            title: "Youth Empowerment",
            description:
              "Through mentorship and training, we prepare young African descendants with the skills they need to succeed in an ever-changing world.",
            features: [
              "Mentorship Programs",
              "Leadership Training",
              "Career Development",
            ],
          },
          {
            title: "Community Development",
            description:
              "We work closely with local organizations to address education and justice issues, providing support services to unserserved communities, particularly those with large African-descendant populations.",
            features: [
              "Educational Programs",
              "Justice Initiatives",
              "Community Partnerships",
            ],
          },
        ].map((program, index) => (
          <div key={index} className="group">
            <div className="bg-white rounded-none p-8 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-300 group-hover:border-amber-800">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-amber-800 transition-colors duration-300 font-serif">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.description}
              </p>
              <ul className="space-y-2">
                {program.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-amber-800 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Events = () => (
  <section
    id="events"
    className="py-20 px-6 bg-white text-gray-800 border-b border-gray-200"
  >
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-4xl font-bold mb-4 font-serif text-gray-900">
        Upcoming Events
      </h2>
      <div className="w-24 h-0.5 bg-amber-800 mx-auto mb-8"></div>
      <div className="bg-gray-50 rounded-none p-12 shadow-sm border border-gray-300">
        <div className="text-6xl mb-6">📅</div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700 font-serif">
          Stay Tuned for Exciting Events!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Check back soon for our upcoming schedule on cultural events,
          workshops, and community gatherings!
        </p>
      </div>
    </div>
  </section>
);

const Store = () => (
  <section
    id="store"
    className="py-20 px-6 bg-gray-50 text-gray-800 border-b border-gray-300"
  >
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-4xl font-bold mb-4 font-serif text-gray-900">
        Community Store
      </h2>
      <div className="w-24 h-0.5 bg-amber-800 mx-auto mb-8"></div>
      <div className="bg-white rounded-none p-12 shadow-sm border border-gray-300">
        <div className="text-6xl mb-6">🛍️</div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700 font-serif">
          ADCC Merchandise Coming Soon
        </h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          Show your pride and support our mission with exclusive ADCC
          merchandise.
        </p>
        <button className="bg-gray-900 hover:bg-amber-800 text-white px-8 py-3 rounded-none font-semibold transition-all duration-300 border-2 border-gray-900 hover:border-amber-800">
          Notify Me When Available
        </button>
      </div>
    </div>
  </section>
);

const Contact = () => {
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
    <section id="contact" className="py-20 px-6 bg-white text-gray-800">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-serif text-gray-900">
            Contact Us
          </h2>
          <div className="w-24 h-0.5 bg-amber-800 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-none p-8 shadow-sm border border-gray-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 font-serif">
              Send us a Message
            </h3>
            <form className="grid gap-6">
              {[
                { name: "name", type: "text", placeholder: "Your Name" },
                { name: "email", type: "email", placeholder: "Your Email" },
                { name: "subject", type: "text", placeholder: "Subject" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="border border-gray-300 p-4 rounded-none focus:ring-2 focus:ring-amber-800 focus:border-transparent bg-white transition-all duration-300"
                />
              ))}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="border border-gray-300 p-4 rounded-none h-32 focus:ring-2 focus:ring-amber-800 focus:border-transparent bg-white transition-all duration-300"
              ></textarea>
              <button
                type="submit"
                className="bg-gray-900 hover:bg-amber-800 text-white py-4 rounded-none font-semibold text-lg transition-all duration-300 border-2 border-gray-900 hover:border-amber-800"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-none p-8 shadow-sm border border-gray-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 font-serif">
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin />,
                    text: "1717 N Street NW STE 1, Washington, DC 20036",
                  },
                  { icon: <Phone />, text: "360-682-1998" },
                  { icon: <Mail />, text: "info@africandcc.org" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span className="text-2xl text-amber-800 mt-1">
                      {item.icon}
                    </span>
                    <p className="text-gray-600 text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-none p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-serif">
                Visit Our Center
              </h3>
              <p className="text-gray-300 mb-4">
                We welcome you to visit our civic center and become part of our
                vibrant community.
              </p>
              <button className="bg-amber-800 hover:bg-amber-700 text-white px-6 py-3 rounded-none font-semibold transition-colors duration-300 border-2 border-amber-800 hover:border-amber-700">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <div className="flex items-center justify-center mb-3">
          <img className="w-12 h-12 object-cover" src="/adcc-logo.png" />
        </div>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          Strengthening Our Global African Identity through cultural
          preservation, community engagement, and leadership development.
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-gray-300 hover:text-amber-600 transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} African Diaspora Civic Center (ADCC). All
          Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <GetInvolved />
      <Programs />
      <Events />
      {/* <Store /> */}
      <Contact />
      <Footer />
    </div>
  );
}
