import { TabsLinks } from "@/components/TabsLinks/component";
import { getRestaurants } from "@/api/api";

export default async function RestaurantLayout({ children }) {
  const restaurants = await getRestaurants();
  const tabsData = restaurants.map(restaurant => {
    return {
      id: restaurant.id,
      name: restaurant.name
    }
  });
  console.log('tabsData', tabsData);

  return (
    <>
      <TabsLinks tabsData={tabsData} />
      {children}
    </>
  )
}
