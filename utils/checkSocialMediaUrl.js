export function checkSocialMediaURL(url) {
  if (url.includes("https://www.")) {
    return url;
  }
  // else if (url.includes("www.")) {
  //   let combine = `https://${url}`;
  //   return combine;
  // }
  else {
    let combine = `${url}`;
    return combine;
  }
}
