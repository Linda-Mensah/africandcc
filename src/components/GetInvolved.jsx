import { Bell, HandCoins, HelpingHand } from "lucide-react";

export const GetInvolved = () => {
  return (
    <section
      id="getInvolved"
      className="py-20 bg-gray-900 text-white text-center relative overflow-hidden border-b border-gray-800"
    >
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
            {
              label: "Volunteer",
              link: "",
              icon: <HelpingHand />,
            },
            {
              label: "Donate",
              link: "https://www.zeffy.com/en-US/donation-form/donate-to-support-our-work-5",
              icon: <HandCoins />,
            },
            { label: "Subscribe", link: "", icon: <Bell /> },
          ].map((action, index) => (
            <a href={action.link} target="_blank" rel="noreferrer" key={index}>
              <button
                key={index}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-amber-800 hover:border-amber-800 text-white px-8 py-4 rounded-none font-semibold text-lg transition-all duration-300 flex items-center gap-3 min-w-40 justify-center hover:scale-105"
              >
                <span className="text-xl">{action.icon}</span>
                {action.label}
              </button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
