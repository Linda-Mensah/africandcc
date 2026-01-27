import { Globe, Home, Mailbox, Star } from "lucide-react";

export const About = () => {
  const coreValues = [
    {
      title: "Civic Engagement",
      icon: Mailbox,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Cultural Preservation",
      icon: Globe,
      color: "from-green-600 to-green-800",
    },
    {
      title: "Youth Empowerment",
      icon: Star,
      color: "from-purple-600 to-purple-800",
    },
    {
      title: "Community Development",
      icon: Home,
      color: "from-red-600 to-red-800",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-white to-amber-50/10"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-800 mb-6 border border-amber-200">
            <span className="text-sm font-semibold uppercase tracking-wider">
              Our Identity
            </span>
          </div> */}

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Who We Are
          </h2>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full"></div>
            <div className="w-4 h-4 rounded-full bg-amber-600"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-700 to-amber-500 rounded-full"></div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800"></div>

          <div className="p-8 lg:p-12">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                The African Diaspora Civic Center (ADCC) serves as a bridge
                between Africa and its diaspora, a gathering place where
                culture, history, and innovation come together to inspire shared
                progress.
              </p>

              {/* Guiding Symbol */}
              <div className="relative bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 lg:p-8 border border-amber-200 mb-8">
                {/* <div className="absolute -top-3 left-8 px-4 py-1 bg-amber-700 text-white text-sm font-semibold rounded-full">
                  Our Guiding Symbol
                </div> */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mt-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
                      <div className="text-2xl text-white font-bold">𓆧</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-800 text-lg leading-relaxed">
                      At the heart of our story is the Adinkra symbol
                      Funtunfunefu-Denkyemfunefu, two Siamese crocodiles sharing
                      one stomach. It reminds us that though we may live in
                      different parts of the world,{" "}
                      <span className="font-semibold text-amber-800">
                        we share one destiny and one heritage.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Through our work in civic engagement, cultural preservation,
                youth empowerment, and community development, ADCC strengthens
                the bonds that unite Africans everywhere, celebrating our
                collective story, honoring our ancestors, and creating
                opportunities for the generations to come.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 border-t border-gray-100 pt-8 lg:pt-12">
              {coreValues.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-b from-white to-gray-50 border border-gray-200 hover:border-amber-300 transition-all duration-300 hover:shadow-md"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base">
                      {item.title}
                    </h4>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <span className="text-sm">African Diaspora Civic Center</span>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="h-2 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600"></div>
        </div>

        {/* Floating Decorations */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-amber-600/10 to-transparent rounded-full blur-xl"></div>
      </div>
    </section>
  );
};
