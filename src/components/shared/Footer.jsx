const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We are passionate about creating the best gaming experiences. Our
              platform allows you to connect, play, and discover the latest
              games.
            </p>
          </div>

          {/* Section 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Game Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Live Streaming
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Community Forums
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              Email: support@toycoders.com
            </p>
            <p className="text-gray-400 text-sm">Phone: +1 (800) 123-4567</p>
            <p className="text-gray-400 text-sm">
              Address: 1234 Gaming Ave, Suite 5678
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © 2024 Toy Coders. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
