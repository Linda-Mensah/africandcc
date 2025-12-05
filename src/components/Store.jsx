export const Store = () => {
  return (
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
};
