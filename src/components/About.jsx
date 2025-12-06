import { Globe, Home, Mailbox, Star } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="py-1 mt-4 px-6 bg-white text-gray-800 border-b border-gray-200"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-serif text-gray-900">
            Who We Are
          </h2>
          <div className="w-24 h-0.5 bg-amber-800 mb-4 mx-auto"></div>
          <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-600">
            The African Diaspora Civic Center (ADCC) serves as a bridge between
            Africa and its diaspora, a gathering place where culture, history,
            and innovation come together to inspire shared progress. <br />{" "}
            <br />
            At the heart of our story is the Adinkra symbol
            Funtunfunefu-Denkyemfunefu, two Siamese crocodiles sharing one
            stomach. It reminds us that though we may live in different parts of
            the world, we share one destiny and one heritage. <br />
            <br />
            Through our work in civic engagement, cultural preservation, youth
            empowerment, and community development, ADCC strengthens the bonds
            that unite Africans everywhere, celebrating our collective story,
            honoring our ancestors, and creating opportunities for the
            generations to come.
          </p>
        </div>

        {/* <div className="text-center mb-12">
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
        </div> */}
      </div>
    </section>
  );
};
