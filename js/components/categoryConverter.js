export function convertCategories(category) {
  let categoryNumber = category;
  if (categoryNumber === 4) {
    return "NEWS";
  } else if (categoryNumber === 6) {
    return "CHARGING";
  } else if (categoryNumber === 5) {
    return "EV TEST";
  }
}

// Fikse så det blir mer dynamisk (hene kategorier fra API)
