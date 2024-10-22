const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 text-white p-8">
      <header className="mb-1 text-center">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-lg mt-2">I would love to hear from you!</p>
      </header>

      <section className="max-w-md w-full">
        <form className="bg-white text-black rounded-lg shadow-xl p-6">
          <div className="mb-2">
            <label className="block text-lg mb-2" htmlFor="name">Name</label>
            <input className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400" type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="mb-2">
            <label className="block text-lg mb-2" htmlFor="email">Email</label>
            <input className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400" type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="mb-2">
            <label className="block text-lg mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400" id="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button className="bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition duration-200" type="submit">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
