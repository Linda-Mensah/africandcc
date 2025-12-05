export const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-20 px-6 bg-white text-[#1A1A1A]">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-10">Our Mission & Vision</h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-[#FAF9F6] border border-[#DCC7AA] p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-[#111111]">
              Our Mission
            </h3>
            <p className="text-lg text-[#444] leading-relaxed">
              To connect and empower people of African descent in the United
              States through civic engagement, cultural preservation, education,
              and community development.
            </p>
          </div>

          <div className="bg-[#DCC7AA] border border-[#FAF9F6] p-8 rounded-lg shadow-sm">
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
