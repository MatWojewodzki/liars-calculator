import { Link } from "@tanstack/react-router"

function Header() {
    return (
        <header className="flex justify-between">
            <Link to="/">
                <h1>Liar's Calculator</h1>
            </Link>
            <nav>
                <ul className="flex gap-10">
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
        </header>
    )
}

export default Header