import { Header } from '@/components/Header/component'

// import './reset.css'
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
        <footer>footer</footer>
        </body>
    </html>
  )
}
