/**
 * Time-of-day theme. Uses the visitor's own clock, so it follows the local day
 * wherever they are, with no location permission needed.
 * Day (light) is 06:00 to 18:29; evening and night (dark) is 18:30 to 05:59.
 * Keep the inline script in index.html / oldindex.html in sync with this rule.
 */
const DAY_START = 6 * 60; // 06:00, in minutes since midnight
const NIGHT_START = 18 * 60 + 30; // 18:30

const OVERRIDE_KEY = "theme-override";

export const isNightNow = (now: Date = new Date()): boolean => {
  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes < DAY_START || minutes >= NIGHT_START;
};

/** A manual choice made with the toggle, kept for the current visit only. */
export const readOverride = (): "dark" | "light" | null => {
  try {
    const v = sessionStorage.getItem(OVERRIDE_KEY);
    return v === "dark" || v === "light" ? v : null;
  } catch {
    return null;
  }
};

export const saveOverride = (mode: "dark" | "light") => {
  try {
    sessionStorage.setItem(OVERRIDE_KEY, mode);
  } catch {
    /* storage unavailable: the choice just won't persist */
  }
};
