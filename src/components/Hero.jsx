export const Hero = () => (
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
          href="#getInvolved"
          className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-none font-semibold text-lg transition-all duration-300"
        >
          Get Involved
        </a>
      </div>
    </div>
  </section>
);
