import { Header } from '@/components/Header/component'
import { Footer } from '@/components/Footer/component'

import './index.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header />

        <div className="wrapper">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}
