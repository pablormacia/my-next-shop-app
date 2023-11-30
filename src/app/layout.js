import Navbar from "@/src/components/Navbar"
import { Karla } from 'next/font/google'
import "./global.css"

export const metadata = {
  title: 'Shop App',
  description: 'Primera app con Next',
}

const karla = Karla({
  weight: ['200', '400', '600'],
  style: ["italic","normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={karla.className}>
        
        <Navbar />
        {children}
      </body>
    </html>
  )
}
