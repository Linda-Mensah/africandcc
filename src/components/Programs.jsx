export const Programs = () => {
  const programData = [
    {
      title: "Civic Engagement",
      description:
        "We believe in the power of active participation to empower the African diaspora in the US to make a difference locally and nationally",
      features: ["Community Leadership", "Voter Education", "Policy Advocacy"],
      bgImage: "/civic-engagement.jpg",
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
      bgImage: "/cultural-preservation.jpg",
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
      bgImage: "/youth-empowerment.jpg",
    },
    {
      title: "Community Development",
      description:
        "We work closely with local organizations to address education and justice issues, providing support services to underserved communities, particularly those with large African-descendant populations.",
      features: [
        "Educational Programs",
        "Justice Initiatives",
        "Community Partnerships",
      ],
      bgImage: "/community-development.jpg",
    },
  ];

  return (
    <section
      id="programs"
      className="py-5 mb-20 px-6 bg-gray-50 text-gray-800 border-b border-gray-300"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-serif text-gray-900">
            What We Do
          </h2>
          <div className="w-24 h-0.5 bg-amber-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {programData.map((program, index) => (
            <div
              key={index}
              className="group relative rounded-none overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-gray-300 group-hover:border-amber-800"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${program.bgImage})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/75 bg-opacity-50"></div>

              {/* Content */}
              <div className="relative p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors duration-300 font-serif">
                  {program.title}
                </h3>
                <p className="mb-6 leading-relaxed">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-white"
                    >
                      <svg
                        className="w-5 h-5 text-amber-400 mr-3 shrink-0"
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
};
