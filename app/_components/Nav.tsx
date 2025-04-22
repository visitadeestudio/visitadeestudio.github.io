"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sections } from "../lib/constants"

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav className="max-w-72 mx-auto md:max-w-md lg:max-w-xl xl:max-w-2xl">
            <Link href="/">
                <img src="./logo.png" alt="logo" className="dark:invert"/>
            </Link>
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