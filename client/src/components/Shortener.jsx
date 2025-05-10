import { Loader2, Check } from "lucide-react";

const Shortener = ({
  shortenerRef,
  originalUrl,
  setOriginalUrl,
  handleShorten,
  loading,
  shortUrl,
  copied,
  copyToClipboard,
  error,
}) => (
  <section
    id="get-started"
    ref={shortenerRef}
    className="border-t border-gray-800 bg-gray-950 px-6 py-16 text-center"
  >
    <h3 className="mb-6 text-3xl font-bold">🔗 Shorten Your URL</h3>
    <div className="mx-auto max-w-xl space-y-4">
      <input
        type="text"
        className="w-full rounded-md bg-gray-800 p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:outline-none"
        placeholder="Enter long URL here..."
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button
        onClick={handleShorten}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-teal-500 p-3 font-semibold transition hover:bg-teal-600"
        disabled={loading}
      >
        {loading ? <Loader2 className="animate-spin" /> : "Shorten URL"}
      </button>

      {error && <p className="text-red-400">{error}</p>}

      {shortUrl && (
        <div className="rounded-lg bg-gray-800 p-4 text-center shadow">
          <p className="mb-2 text-gray-300">Your Short URL:</p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <span className="break-all text-teal-400">
              <a href={shortUrl} target="_blank" rel="noreferrer">
                {shortUrl}
              </a>
            </span>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 text-sm text-teal-300 hover:underline"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" /> Copied!
                </>
              ) : (
                "Copy"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  </section>
);

export default Shortener;
