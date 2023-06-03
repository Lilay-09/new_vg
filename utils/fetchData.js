const base = process.env.API_URL;
export const postData = async (url, body) => {
  const res = await fetch(`${process.env.API_URL}/backend/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};
