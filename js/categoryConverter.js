export async function getCategory(category) {
  try {
    const url = "https://evolution.heysiri.codes/wp-json/wp/v2/categories";
    const result = await fetch(url);
    const json = await result.json();

    for (let i = 0; i < json.length; i++) {
      if (category === json[i].id) {
        return json[i].name.toUpperCase();
      }
    }
  } catch (error) {
    return "No category found";
  }
}
