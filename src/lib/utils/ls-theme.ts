/**
 * Obtains theme from local storage
 * @returns string
 */
export function getTheme() {
  const theme = localStorage.getItem("theme");

  return theme;
}

/**
 * Sets theme in local storage
 * @param theme
 * @returns string
 */
export function setTheme(theme: string) {
  localStorage.setItem("theme", theme);
  return theme;
}
