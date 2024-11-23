import Link from "next/link"
import { Navbar } from "./Navbar"


export const Header = () => {
  return (
    <header className="py-8 bg-white border-b px-8 text-base-heading z-50 flex items-center justify-between max-w-[1440px] mx-auto">
      <Link className="text-2xl font-medium" href="/">. Dager</Link>
      <Navbar />
    </header>
  )
}