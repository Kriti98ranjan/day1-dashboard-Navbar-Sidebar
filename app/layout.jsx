import "./globals.css"
import Sidebar from "@/app/components/ui/Sidebar"
import Navbar from "@/app/components/ui/Navbar"

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
        </div>
      </body>
    </html>
  )
}