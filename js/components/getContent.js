export async function getContent(url) {
  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    return json;
  }
}
