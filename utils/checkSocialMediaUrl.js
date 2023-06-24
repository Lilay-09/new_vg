export function checkSocialMediaURL(url) {
  let www = url.substring(0, 3);
  if (url !== null && url !== "undefined" && www === "www") {
    return `https://${url}`;
  } else {
    return url;
  }
}
