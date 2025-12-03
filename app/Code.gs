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
  const props = PropertiesService.getScriptProperties();
  const key = `rl_${ip}`;
  const now = Date.now();
  const stored = props.getProperty(key);
  if (!stored) {
    props.setProperty(key, JSON.stringify({ count: 1, windowStart: now }));
    return false;
  }

  const parsed = JSON.parse(stored);
  if (now - parsed.windowStart > RATE_LIMIT_WINDOW_MS) {
    props.setProperty(key, JSON.stringify({ count: 1, windowStart: now }));
    return false;
  }

  if (parsed.count >= RATE_LIMIT_MAX) {
    return true;
  }

  parsed.count++;
  props.setProperty(key, JSON.stringify(parsed));
  return false;
}

function doPost(e) {
  try {
    const ip = (e && e.context && e.context.clientIp) || "unknown";

    if (isRateLimited(ip)) {
      return ContentService.createTextOutput(
        JSON.stringify({
          ok: false,
          message: "Too many requests. Please wait and try again.",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const raw = e.postData && e.postData.contents;
    if (!raw) {
      return ContentService.createTextOutput(
        JSON.stringify({
          ok: false,
          message: "Empty request body.",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const body = JSON.parse(raw);

    const fullName = sanitize(body.fullName, 120);
    const email = sanitize(body.email, 160);
    const phone = sanitize(body.phone, 60);
    const nationality = sanitize(body.nationality, 80);
    const highestEducation = sanitize(body.highestEducation, 80);
    const grades = sanitize(body.grades, 80);
    const englishTest = sanitize(body.englishTest, 40);
    const destination = sanitize(body.destination, 80);
    const intake = sanitize(body.intake, 80);
    const courseInterest = sanitize(body.courseInterest, 120);
    const budget = sanitize(body.budget, 80);
    const extraInfo = sanitize(body.extraInfo, 2000);
    const consent = !!body.consent;

    if (!fullName || !email || !highestEducation || !destination) {
      return ContentService.createTextOutput(
        JSON.stringify({
          ok: false,
          message: "Required fields are missing.",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return ContentService.createTextOutput(
        JSON.stringify({
          ok: false,
          message: "Please enter a valid email address.",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (!consent) {
      return ContentService.createTextOutput(
        JSON.stringify({
          ok: false,
          message: "Consent is required to submit this form.",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (countWords(extraInfo) > MAX_WORDS_EXTRA) {
      return ContentService.createTextOutput(
        JSON.stringify({
          ok: false,
          message: "Extra details must be 200 words or fewer.",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      fullName,
      email,
      phone,
      nationality,
      highestEducation,
      grades,
      englishTest,
      destination,
      intake,
      courseInterest,
      budget,
      extraInfo,
      ip,
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    Logger.log(err);
    return ContentService.createTextOutput(
      JSON.stringify({
        ok: false,
        message: "Internal error while processing your request.",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
