import Nav from "./Nav"

export default function Header() {
    return (
        <header className="flex items-center mt-3 md:mt-1">
            <img src="./logoReflector.png" alt="logo reflector" className="dark:invert max-w-16 ml-3 md:fixed md:ml-4"/>
            <Nav/>
        </header>
    )
}