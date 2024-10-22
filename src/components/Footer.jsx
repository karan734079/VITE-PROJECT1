const Footer = () => {
    return (
      <footer className="bg-white text-gray-800  p-4 shadow-lg bottom-0 left-0 right-0">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">© 2024 MYPROJECTS. All rights reserved.</p>
  
          <nav className="flex space-x-8">
            <a href="/privacy" className="hover:text-gray-600 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-600 transition">Terms of Service</a>
            <a href="/contact" className="hover:text-gray-600 transition">Contact Us</a>
          </nav>
  
          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-500 transition">
              Subscribe
            </button>
            <button className="bg-gray-800 text-white py-2 px-4 rounded shadow hover:bg-gray-700 transition">
              Feedback
            </button>
          </div>
        </div>
      </footer>
    );
};

export default Footer;

  