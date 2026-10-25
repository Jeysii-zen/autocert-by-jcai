// Applies the saved light/dark choice before the page is drawn, so it never
// flashes the other theme. Loaded in <head>; the toggle itself is in app.js.
try {
  const theme = localStorage.getItem("autocert-theme");
  if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
} catch {}
