export type Theme = "light" | "dark";

/**
 * Obtains theme from local storage
 * @returns string
 */
export function getTheme() {
  const theme: Theme = localStorage.getItem("theme") as Theme;

  return theme;
}

/**
 * Sets theme in local storage
 * @param theme
 * @returns string
 */
export function setTheme(theme: Theme) {
  localStorage.setItem("theme", theme);
  return theme;
}
