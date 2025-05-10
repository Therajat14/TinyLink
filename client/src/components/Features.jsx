const Features = () => (
  <section id="features" className="mx-auto max-w-5xl px-6 py-16">
    <h3 className="mb-12 text-center text-3xl font-bold">⚡ Features</h3>
    <div className="grid gap-8 text-center md:grid-cols-3">
      {[
        {
          title: "Fast Shortening",
          desc: "Instantly generate short URLs with unique codes.",
        },
        {
          title: "Redirect Smart",
          desc: "Redirect users to the original URL smoothly and safely.",
        },
        {
          title: "Open Source",
          desc: "Free to use and modify. Fully open-sourced on GitHub.",
        },
      ].map((f, i) => (
        <div
          key={i}
          className="rounded-lg bg-gray-800 p-6 shadow transition hover:shadow-lg"
        >
          <h4 className="mb-2 text-xl font-semibold">{f.title}</h4>
          <p className="text-gray-400">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
