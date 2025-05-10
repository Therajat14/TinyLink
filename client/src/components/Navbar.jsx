import { Menu, X } from "lucide-react";

const Navbar = ({
  scrollToShortener,
  activeSection,
  menuOpen,
  setMenuOpen,
}) => (
  <header className="border-b border-gray-800 p-4">
    <div className="mx-auto flex max-w-6xl items-center justify-between">
      <h1 className="text-2xl font-bold text-teal-400">TinyLink</h1>
      <nav className="hidden space-x-6 text-sm md:flex">
        <a href="#features" className="transition hover:text-teal-300">
          Features
        </a>
        <a
          href="#get-started"
          onClick={scrollToShortener}
          className={`transition hover:text-teal-300 ${activeSection === "get-started" ? "font-semibold text-teal-400" : ""}`}
        >
          Get Started
        </a>
        <a
          href="https://github.com/Therajat14/TinyLink"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-teal-300"
        >
          GitHub
        </a>
      </nav>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>
    </div>
    {menuOpen && (
      <div className="mt-4 space-y-2 text-sm md:hidden">
        <a
          href="#features"
          className="block px-4 py-2 transition hover:text-teal-300"
        >
          Features
        </a>
        <button
          onClick={scrollToShortener}
          className={`block w-full px-4 py-2 text-left transition hover:text-teal-300 ${activeSection === "get-started" ? "font-semibold text-teal-400" : ""}`}
        >
          Get Started
        </button>
        <a
          href="https://github.com/Therajat14/TinyLink"
          className="block px-4 py-2 transition hover:text-teal-300"
        >
          GitHub
        </a>
      </div>
    )}
  </header>
);

export default Navbar;
