const rawBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://5jw239jrvj.execute-api.ap-northeast-2.amazonaws.com/prod/api";

export const API_BASE_URL = rawBaseUrl.replace(/\/$/, "");

export const apiUrl = (path: string) => {
  if (!path) {
    return API_BASE_URL;
  }
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalized}`;
};
