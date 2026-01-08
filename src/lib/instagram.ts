export const normalizeInstagramEmbedUrl = (input: string) => {
  const value = input.trim();
  if (!value) {
    return null;
  }
  try {
    const parsed = new URL(value);
    if (!/(^|\.)instagram\.com$/i.test(parsed.hostname)) {
      return null;
    }
    const match = parsed.pathname.match(/\/(reel|p|tv)\/([^/?#]+)/);
    if (!match) {
      return null;
    }
    return `https://www.instagram.com/${match[1]}/${match[2]}/embed`;
  } catch {
    return null;
  }
};
