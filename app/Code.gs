const SHEET_NAME = "Eligibility";
const MAX_WORDS_EXTRA = 200;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // per IP per window

function countWords(text) {
  if (!text) return 0;
  return String(text).trim().split(/\s+/).filter(Boolean).length;
}

function sanitize(text, maxLen) {
  if (!text) return "";
  const cleaned = String(text)
    .trim()
    .replace(/[\u0000-\u001F]+/g, "");
  return cleaned.slice(0, maxLen);
}

function isRateLimited(ip) {
  const props = PropertiesService.getScriptPropertie
