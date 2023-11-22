import { Header } from '@/components/Header/component'
import { Footer } from '@/components/Footer/component'
import { TabsLinks } from "@/components/TabsLinks/component";

const tabsData = [
  {
    id: 123,
    name: 'Rest 1'
  },
  {
    id: 234,
    name: 'Rest 2'
  }
]

export default function RestaurantLayout({ children }) {
  return (
    <>
      <TabsLinks tabsData={tabsData} />
      {children}
    </>
  )
}
