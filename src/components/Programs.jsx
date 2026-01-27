import React, { useState } from "react";
import {
  BookOpen,
  Users,
  Globe,
  Rocket,
  Music,
  Building2,
  ChevronRight,
  Award,
  Target,
  Heart,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const Programs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const programData = [
    {
      title: "African Cultural Academy",
      description:
        "Our flagship program reconnects youth with Africa's rich history, languages, and arts.",
      longDescription:
        "Through classes in African history, traditional and contemporary dance, and languages like Twi, Yoruba, Swahili, and Amharic, participants develop cultural pride, creativity, and confidence while deepening their sense of identity and intergenerational connection.",
      features: ["Cultural Education", "African Heritage", "Youth Empowerment"],
      bgImage: "/civic-engagement.jpg",
      icon: BookOpen,
      accentColor: "from-amber-700 to-amber-900",
      stats: "500+ Students",
    },
    {
      title: "Good Citizen Initiative",
      description:
        "Equips individuals and families with knowledge and skills to engage fully in civic life.",
      longDescription:
        "Workshops cover civic rights, voter education, leadership development, and community advocacy, while additional sessions provide guidance on immigration and access to local resources.",
      features: [
        "Civic Engagement",
        "Leadership Development",
        "Community Empowerment",
      ],
      bgImage: "/cultural-preservation.jpg",
      icon: Users,
      accentColor: "from-blue-700 to-blue-900",
      stats: "200+ Graduates",
    },
    {
      title: "Digital Museum",
      description:
        "Interactive online archive celebrating African and diaspora culture, history, and stories.",
      longDescription:
        "Visitors can explore migration journeys, traditions, oral histories, and contemporary achievements, fostering heritage preservation, intergenerational learning, and a shared global African identity.",
      features: [
        "Heritage Preservation",
        "Digital Archive",
        "Global African Identity",
      ],
      bgImage: "/youth-empowerment.jpg",
      icon: Globe,
      accentColor: "from-purple-700 to-purple-900",
      stats: "1000+ Artifacts",
    },
    {
      title: "Youth Business Incubator",
      description:
        "Empowers young African diaspora innovators to turn ideas into sustainable ventures.",
      longDescription:
        "Through entrepreneurship training, financial literacy, digital skills, and mentorship, participants gain the tools to launch and grow businesses, fostering economic mobility and leadership.",
      features: [
        "Entrepreneurship",
        "Economic Empowerment",
        "Youth Leadership",
      ],
      bgImage: "/youth-empowerment.jpg",
      icon: Rocket,
      accentColor: "from-emerald-700 to-emerald-900",
      stats: "50+ Startups",
    },
    {
      title: "African Cultural Festival (AfroCult)",
      description: "Annual celebration of African heritage and creativity.",
      longDescription:
        "Features music, dance, art, fashion, food, and storytelling, while providing a platform for artists, entrepreneurs, and small businesses to showcase their work.",
      features: [
        "Cultural Celebration",
        "Arts & Culture",
        "Community Connection",
      ],
      bgImage: "/afroculthighlight.png",
      icon: Music,
      accentColor: "from-rose-700 to-rose-900",
      stats: "5000+ Attendees",
    },
    {
      title: "Community Development",
      description:
        "Addressing education and justice issues in underserved communities.",
      longDescription:
        "We work closely with local organizations to provide support services to underserved communities, particularly those with large African-descendant populations.",
      features: [
        "Educational Programs",
        "Justice Initiatives",
        "Community Partnerships",
      ],
      bgImage: "/community-development.jpg",
      icon: Building2,
      accentColor: "from-indigo-700 to-indigo-900",
      stats: "10+ Partnerships",
    },
  ];

  return (
    <section
      id="programs"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-800 mb-6">
            <Target className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Programs</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Empowering Communities Through Culture
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            We deliver impactful programs that celebrate African heritage while
            fostering growth, leadership, and community connection across the
            diaspora.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full"></div>
            <div className="w-8 h-1 bg-amber-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-700 to-amber-500 rounded-full"></div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programData.map((program, index) => {
            const IconComponent = program.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Background with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${program.bgImage})` }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${program.accentColor} mix-blend-multiply opacity-60`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.accentColor} flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-br ${program.accentColor}`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 right-4">
                    <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-sm font-bold text-gray-900">
                        {program.stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 font-serif group-hover:text-gray-800 transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-700 group/item"
                      >
                        <div
                          className={`w-6 h-6 rounded-lg bg-gradient-to-br ${program.accentColor} flex items-center justify-center flex-shrink-0`}
                        >
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="group/btn w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border border-gray-200 hover:border-gray-300 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg ${program.accentColor.replace("from-", "bg-").replace(" to-", "/20")} flex items-center justify-center`}
                      >
                        <ArrowRight className="w-4 h-4 text-gray-700" />
                      </div>
                      <span className="font-semibold text-gray-800">
                        Learn More
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Effect Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${program.accentColor.replace("from-", "bg-gradient-to-r ")} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl border border-amber-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">
                  Join Our Community
                </p>
                <p className="text-sm text-gray-600">
                  Be part of our transformative programs
                </p>
              </div>
            </div>

            <button className="group px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center gap-2">
              <span>Explore All Programs</span>
              <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
