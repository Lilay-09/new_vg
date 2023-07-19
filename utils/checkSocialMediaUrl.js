export function checkSocialMediaURL(url) {
  let www = url ? url.substring(0, 3) : "";
  if (url !== null && url !== "undefined" && www !== null && www === "www") {
    return `https://${url}`;
  } else if (url == null) {
    return (url = "");
  } else {
    return url;
  }
}
