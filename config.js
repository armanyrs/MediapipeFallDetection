// config.js
// This file loads configuration from the server's /config endpoint
// Supports both Express backend (localhost) and Cloudflare Worker
// It provides a centralized way to access environment variables in the browser

let config = null;

// Load configuration from server
export async function loadConfig() {
  if (config) return config;

  try {
    // Get backend base URL from window or use default
    const backendBase = (window.BACKEND_BASE || "").replace(/\/$/, "");
    const configUrl = backendBase ? `${backendBase}/config` : "/config";

    const response = await fetch(configUrl);
    if (!response.ok) {
      throw new Error(`Failed to load config: ${response.status}`);
    }
    config = await response.json();

    // Set BACKEND_BASE in config if not already set
    if (!config.BACKEND_BASE && backendBase) {
      config.BACKEND_BASE = backendBase;
    }

    console.log("[Config] Configuration loaded successfully from:", configUrl);
    return config;
  } catch (error) {
    console.error("[Config] Failed to load configuration:", error);
    // Fallback to default values if server config is not available
    config = {
      TUYA_DEVICE_ID: "",
      TELEGRAM_BOT_URL: "",
      TELEGRAM_CHAT_ID: "",
      TELEGRAM_ENABLED: false,
      TELEGRAM_COOLDOWN_SECONDS: 60,
      BACKEND_BASE: window.BACKEND_BASE || "",
      WEB_API_KEY: "",
    };
    return config;
  }
}

// Get specific config value
export function getConfig(key) {
  if (!config) {
    console.warn(
      "[Config] Configuration not loaded yet. Call loadConfig() first."
    );
    return null;
  }
  return config[key];
}

// Get all config
export function getAllConfig() {
  return config;
}

// Initialize window globals for backward compatibility
export function initWindowGlobals() {
  if (!config) {
    console.warn(
      "[Config] Configuration not loaded yet. Call loadConfig() first."
    );
    return;
  }

  window.BACKEND_BASE = config.BACKEND_BASE || "";
  window.TUYA_DEVICE_ID = config.TUYA_DEVICE_ID || "";
  window.WEB_API_KEY = config.WEB_API_KEY || "";
  console.log("[Config] Window globals initialized");
}
