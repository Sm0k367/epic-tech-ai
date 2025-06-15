// Utility Functions for Epic Tech AI

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function log(message, level = "info") {
  const prefix = `[EpicTechAI]`;
  switch (level) {
    case "warn":
      console.warn(`${prefix} ⚠️ ${message}`);
      break;
    case "error":
      console.error(`${prefix} ❌ ${message}`);
      break;
    default:
      console.log(`${prefix} ✅ ${message}`);
  }
}
