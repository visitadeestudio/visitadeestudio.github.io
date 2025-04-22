import Link from "next/link"
import Nav from "./Nav"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Link href="/" className="relative w-full max-w-[280px] md:max-w-[320px] mx-auto">
            <Image src="/logo.png" alt="Visita de estudio" width={320} height={80} className="dark:invert" priority />
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  )
}
