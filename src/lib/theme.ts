export const THEME_STORAGE_KEY = "nexiatech-theme";

/**
 * Runs before first paint so the site always boots in dark mode
 * (unless the visitor explicitly chose light mode previously).
 */
export const themeInitScript = `(function(){try{var k=${JSON.stringify(
  THEME_STORAGE_KEY,
)};if(localStorage.getItem(k)==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})();`;
