"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sections } from "../lib/constants"

export default function Nav() {
  const pathname = usePathname()
  if (Sections.length === 0) return null

  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8 justify-center mt-4">
        {Sections.map(({ label, route }) => {
          const isActive = pathname === route
          return (
            <li key={route}>
              <Link
                href={route}
                className={`${
                  isActive
                    ? "font-bold text-black dark:text-white border-b-2 border-black dark:border-white pb-1"
                    : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                }`}
              >
                <span className="text-sm uppercase tracking-wider">{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
