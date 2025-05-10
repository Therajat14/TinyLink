const Hero = ({ scrollToShortener }) => (
  <section className="bg-gray-900 px-6 py-20 text-center">
    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
      Shorten URLs. Share Fast.
    </h2>
    <p className="mx-auto mb-8 max-w-xl text-gray-400">
      TinyLink helps you create short, clean, and shareable URLs. Built with
      React, Node.js, and MongoDB.
    </p>
    <button
      onClick={scrollToShortener}
      className="rounded-lg bg-teal-500 px-6 py-3 font-medium text-white transition hover:bg-teal-600"
    >
      Get Started
    </button>
  </section>
);

export default Hero;
