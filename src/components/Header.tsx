import { Link } from "@tanstack/react-router"
import { useState } from "react"
import MaterialSymbol from "./MaterialSymbol.tsx"

function NavBar({ isMenuOpen }: { isMenuOpen: boolean }) {
    return (
        <nav id="navbar" className={`w-full sm:w-auto sm:block ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col sm:flex-row sm:gap-x-5 items-baseline">
                <li>
                    <Link to="/">
                        Calculator
                    </Link>
                </li>
                <li>
                    <Link to="/hand-order">
                        Poker hand order
                    </Link>
                </li>
                <li>
                    <Link to="/game-rules">
                        Game rules
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="flex flex-col sm:flex-row justify-between p-3 items-baseline">
            <div className="flex justify-between items-center sm:items-baseline w-full sm:w-auto">
                <Link to="/">
                    Liar's Calculator
                </Link>
                <button
                    className="sm:hidden p-2 leading-none flex items-center justify-center h-fit rounded-lg bg-neutral-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="navbar"
                >
                    <MaterialSymbol iconName={isMenuOpen ? "close" : "menu"} />
                </button>
            </div>
            <NavBar isMenuOpen={isMenuOpen} />
        </header>
    )
}

export default Header