import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener";
import Features from "./components/Features";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showShortener, setShowShortener] = useState(false);
  const shortenerRef = useRef(null);

  const isValidUrl = (url) =>
    /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\w\-\._~:/?#[\]@!$&'()*+,;=]*)?$/.test(
      url,
    );

  const handleShorten = async () => {
    if (!isValidUrl(originalUrl)) {
      setError("Please enter a valid URL (with http/https)");
      return;
    }

    let formattedUrl = originalUrl;
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = "http://" + formattedUrl;
    }

    setLoading(true);
    setError("");
    setShortUrl("");

    try {
      const response = await axios.post(baseUrl, {
        originalUrl: formattedUrl,
      });
      setShortUrl(response.data.shortUrl);
    } catch (err) {
      setError(
        "Failed to shorten URL" +
          (err.response ? `: ${err.response.data.message}` : ""),
      );
    } finally {
      setLoading(false);
      setOriginalUrl("");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShortUrl("");
    }, 2000);
  };

  const scrollToShortener = () => {
    setShowShortener(true);
    setTimeout(
      () => shortenerRef.current?.scrollIntoView({ behavior: "smooth" }),
      100,
    );
    setActiveSection("get-started");
    setMenuOpen(false);
  };

  const handleScroll = () => {
    const getStartedOffset = shortenerRef.current?.offsetTop || 0;
    const scrollPosition = window.scrollY + 200;
    setActiveSection(scrollPosition >= getStartedOffset ? "get-started" : "");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 font-sans text-white">
      <Navbar
        scrollToShortener={scrollToShortener}
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main className="flex-1">
        <Hero scrollToShortener={scrollToShortener} />
        {showShortener && (
          <Shortener
            shortenerRef={shortenerRef}
            originalUrl={originalUrl}
            setOriginalUrl={setOriginalUrl}
            handleShorten={handleShorten}
            loading={loading}
            shortUrl={shortUrl}
            copied={copied}
            copyToClipboard={copyToClipboard}
            error={error}
          />
        )}
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
