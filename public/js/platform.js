// Standalone shim: inside claude.ai the page gets `window.claude` from the viewer.
// When you open index.html directly (or host it yourself), this provides the
// same `claude.use()` call so the download buttons still work.
//  - "downloads": saves files with a normal browser download.
(function () {
  if (window.claude && typeof window.claude.use === "function") return;
  const downloads = {
    async save({ filename, data }) {
      const blob = data instanceof Blob ? data : new Blob([data]);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      return { status: "saved" };
    }
  };
  window.claude = { use: async name => (name === "downloads" ? downloads : null) };
})();
