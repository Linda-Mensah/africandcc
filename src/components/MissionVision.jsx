import React from "react";
import {
  Target,
  Eye,
  Shield,
  Flag,
  Star,
  Zap,
  Heart,
  ArrowRight,
  Home,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export const MissionVision = () => {
  const missionPoints = [
    "Civic engagement and political empowerment",
    "Cultural preservation and celebration",
    "Educational access and excellence",
    "Community development and economic growth",
    "Intergenerational connection and mentorship",
  ];

  const visionPoints = [
    "Thriving African diaspora communities",
    "Strong cultural identity and pride",
    "Political representation and influence",
    "Economic prosperity and entrepreneurship",
    "Global African unity and collaboration",
  ];

  return (
    <section
      id="mission-vision"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-white to-amber-100/20">
        {/* Optional: replace with a real SVG background */}
        <div className="absolute inset-0 opacity-20 bg-amber-100"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Purpose</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Guiding Our Community Forward
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Our mission and vision are the foundation upon which we build a
            stronger, more connected African diaspora community in the United
            States.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-600/5 to-transparent rounded-full translate-y-20 -translate-x-20"></div>

            {/* Card Header */}
            <div className="relative p-8 lg:p-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-amber-700">
                      Our Purpose
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
                    Our Mission
                  </h3>
                </div>
                <div className="hidden lg:block">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-amber-700" />
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="relative mb-10">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-amber-700 rounded-full"></div>
                <p className="text-xl lg:text-2xl font-semibold text-gray-800 leading-relaxed pl-6 italic">
                  "To connect and empower people of African descent in the
                  United States through civic engagement, cultural preservation,
                  education, and community development."
                </p>
              </div>

              {/* Mission Points */}
              {/* <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-600" />
                  Key Focus Areas
                </h4>
                <ul className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-4 h-4 text-amber-700" />
                      </div>
                      <span className="text-gray-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* Impact Stats */}
              {/* <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-800 mb-1">
                      15+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years of Service
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-800 mb-1">
                      5K+
                    </div>
                    <div className="text-sm text-gray-600">
                      Community Members
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Bottom Border */}
            {/* <div className="h-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700"></div> */}
          </div>

          {/* Vision Card */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full translate-y-20 -translate-x-20"></div>

            {/* Card Header */}
            <div className="relative p-8 lg:p-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                      Our Dream
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-serif">
                    Our Vision
                  </h3>
                </div>
                <div className="hidden lg:block">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center">
                    <Flag className="w-8 h-8 text-amber-300" />
                  </div>
                </div>
              </div>

              {/* Vision Statement */}
              <div className="relative mb-10">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full"></div>
                <p className="text-xl lg:text-2xl font-semibold text-white leading-relaxed pl-6 italic">
                  "To build a united and thriving African diaspora community,
                  one that celebrates its roots, amplifies its voice, and shapes
                  a shared future of progress and pride."
                </p>
              </div>

              {/* Vision Points */}
              {/* <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  Future Aspirations
                </h4>
                <ul className="space-y-3">
                  {visionPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400/20 to-amber-500/20 flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-4 h-4 text-amber-300" />
                      </div>
                      <span className="text-gray-200 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* Call to Action */}
              {/* <div className="mt-12">
                <div className="flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-xl border border-amber-400/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Join Our Journey
                      </p>
                      <p className="text-sm text-amber-200">
                        Be part of our vision for the future
                      </p>
                    </div>
                  </div>

                  <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2 group">
                    <span>Partner With Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div> */}
            </div>

            {/* Bottom Border */}
            {/* <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div> */}
          </div>
        </div>

        {/* Bottom Quote */}
        {/* <div className="mt-20 text-center max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Home className="w-8 h-8 text-amber-600" />
            </div>
            <p className="text-2xl lg:text-3xl font-serif text-gray-800 mb-6 leading-relaxed">
              "Our strength lies in our unity, our pride in our heritage, and
              our future in our collective action."
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <span className="text-sm text-gray-500">
                — African Diaspora Collective Council
              </span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
