export async function getRestaurants() {
  const response = await fetch("http://localhost:3001/api/restaurants/");
  return response.json();
}

export async function getRestaurantById(restaurantId) {
  const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantId}`);
  return response.json();
}