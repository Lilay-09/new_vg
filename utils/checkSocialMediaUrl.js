export function checkSocialMediaURL(url) {
  if (url !== null && url.includes("www")) {
    return `https://${url}`;
  } else if (url === null) {
    return "";
  } else {
    return url;
  }
}
