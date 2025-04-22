"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sections } from "../lib/constants"

export default function Nav() {
    const pathname = usePathname()
    if (Sections.length === 0) return null

    return (
        <nav className="">
            <ul>
                {Sections.map(({ label, route }) => {
                    const isActive = pathname.startsWith(route)
                    return (
                        <li key={route}>
                            <Link href={route}
                                className={`${isActive ?
                                    'font-bold underline text-gray-700 hover:text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>
                                <span>
                                    {label}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}