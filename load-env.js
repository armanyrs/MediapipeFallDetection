// load-env.js
// Load .env file ke window globals untuk Firebase config
// Karena browser tidak bisa baca .env otomatis, kita fetch dan parse manual

export async function loadEnv() {
  try {
    const response = await fetch(".env");
    if (!response.ok) {
      console.warn("[ENV] .env file not found, using fallback config");
      return;
    }

    const text = await response.text();
    const lines = text.split("\n");

    lines.forEach((line) => {
      // Skip comments dan empty lines
      if (line.trim().startsWith("#") || !line.trim()) return;

      const [key, ...valueParts] = line.split("=");
      const value = valueParts.join("=").trim();

      if (key && value) {
        window[key.trim()] = value;
      }
    });

    console.log("[ENV] Environment variables loaded:", {
      FIREBASE_PROJECT_ID: window.FIREBASE_PROJECT_ID,
      BACKEND_BASE: window.BACKEND_BASE,
    });
  } catch (error) {
    console.error("[ENV] Failed to load .env:", error);
  }
}
