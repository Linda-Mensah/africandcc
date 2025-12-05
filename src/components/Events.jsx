export const Events = () => {
  return (
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
};
