export function checkSocialMediaURL(url) {
  if (url.includes("www")) {
    return `https://${url}`;
  } else {
    return url;
  }
}
