export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <div className="flex items-center justify-center mb-3">
          <img className="w-12 h-12 object-cover" src="/adcc-logo.png" />
        </div>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          Strengthening Our Global African Identity through cultural
          preservation, community engagement, and leadership development.
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-gray-300 hover:text-amber-600 transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} African Diaspora Civic Center (ADCC). All
          Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);
