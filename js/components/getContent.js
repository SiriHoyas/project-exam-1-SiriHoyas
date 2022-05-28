export async function getContent(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    return json;
  } catch (error) {
    return "There was an error, please try again later";
  }
}
