import { ReactNode } from "react"
import { Link, LinkProps } from "@tanstack/react-router"
import { useState } from "react"
import MaterialSymbol from "./MaterialSymbol.tsx"
import classNames from "classnames"

function NavigationLink({ to, children }: Pick<LinkProps, "to"> & { children: ReactNode }) {
    return <Link
        to={to}
        className="hover:underline underline-offset-3 decoration-2"
        activeProps={{ className: "underline" }}
    >
        {children}
    </Link>
}

function NavBar({ isMenuOpen }: { isMenuOpen: boolean }) {
    return (
        <nav
            id="navbar"
            className={classNames(
                "px-6 py-2 mt-5 sm:mt-0 w-full sm:w-auto sm:block bg-neutral-200 sm:bg-transparent",
                { "block": isMenuOpen, "hidden": !isMenuOpen})
            }
        >
            <ul className="flex flex-col gap-y-1 sm:flex-row sm:gap-x-5 items-baseline">
                <li>
                    <NavigationLink to="/">
                        Probability calculator
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/hand-order">
                        Poker hand order
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink to="/game-rules">
                        Game rules
                    </NavigationLink>
                </li>
            </ul>
        </nav>
    )
}


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="flex flex-col sm:flex-row justify-between py-5 items-baseline bg-neutral-50">
            <div className="flex justify-between items-center px-5 sm:items-baseline w-full sm:w-auto">
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