import { getRestaurantById, getRestaurants } from "@/api/api";

export async function generateStaticParams() {
  const restaurants = await getRestaurants();

  return restaurants.map(({ id }) => ({ restaurantId: id }));
}

export default async function RestaurantIdPage({ params: { restaurantId } }) {
  const restaurant = await getRestaurantById(restaurantId);
  return <div>
    <h2>{restaurant.name}</h2>
  </div>
}
