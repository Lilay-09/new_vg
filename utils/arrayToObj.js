function arrayToObject(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }

  const obj = {};
  arr.forEach((item, index) => {
    obj[index] = item;
  });

  return obj;
}
export default arrayToObject;
