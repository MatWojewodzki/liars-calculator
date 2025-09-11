import { ReactNode } from "react"
import { Link, LinkProps } from "@tanstack/react-router"
import { useState } from "react"
import MaterialSymbol from "../common/MaterialSymbol.tsx"
import classNames from "classnames"
import { useTranslation } from "react-i18next"

function NavigationLink({ to, children, onClick }: Pick<LinkProps, "to"> & { children: ReactNode, onClick: () => void }) {
    return <Link
        to={to}
        className="hover:underline underline-offset-3 decoration-2"
        activeProps={{ className: "underline" }}
        onClick={onClick}
    >
        {children}
    </Link>
}

function Navbar({ isMenuOpen, onLinkClick }: { isMenuOpen: boolean, onLinkClick: () => void }) {
    const { t } = useTranslation("layout", { keyPrefix: "header.navbar" })

    return (
        <nav
            id="navbar"
            className={classNames(
                "px-5 py-2 mt-5 sm:py-0 sm:mt-0 w-full sm:w-auto sm:block",
                { "block": isMenuOpen, "hidden": !isMenuOpen})
            }
        >
            <ul className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-5 items-baseline">
                <li>
                    <NavigationLink onClick={onLinkClick} to="/">
                        {t("home")}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink onClick={onLinkClick} to="/hand-ranking">
                        {t("pokerHandRanking")}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink onClick={onLinkClick} to="/game-rules">
                        {t("gameRules")}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink onClick={onLinkClick} to="/about">
                        {t("about")}
                    </NavigationLink>
                </li>
            </ul>
        </nav>
    )
}


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const onLinkClick = () => setIsMenuOpen(false)

    return (
        <header className="flex flex-col sm:flex-row justify-between py-5 items-baseline bg-neutral-50">
            <div className="flex justify-between items-center px-5 sm:items-baseline w-full sm:w-auto">
                <Link to="/" className="text-lg">
                    Liar's Calculator
                </Link>
                <button
                    className={classNames(
                        "sm:hidden p-2 leading-none flex items-center justify-center h-fit rounded-lg ",
                        "bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-300",
                        "active:scale-98"
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="navbar"
                >
                    <MaterialSymbol iconName={isMenuOpen ? "close" : "menu"} />
                </button>
            </div>
            <Navbar isMenuOpen={isMenuOpen} onLinkClick={onLinkClick} />
        </header>
    )
}

export default Header