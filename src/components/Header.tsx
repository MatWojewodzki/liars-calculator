import { Link } from "@tanstack/react-router";

function Header() {
    return (
        <header className="flex justify-between">
            <Link to="/">
                <h1>Liar's Calculator</h1>
            </Link>
            <div className="flex gap-10">
                <Link to="/calculator">
                    Calculator
                </Link>
                <Link to="/hand-order">
                    Poker hand order
                </Link>
            </div>
        </header>
    )
}

export default Header