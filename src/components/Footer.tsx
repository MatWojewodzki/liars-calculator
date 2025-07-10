import classNames from "classnames";

function currentYear(): string {
    const year = new Date().getFullYear()
    return year === 2025 ? "" : `-${year}`
}


function Footer() {
    return (
        <footer className={classNames(
            "text-center  h-64",
            "bg-linear-to-t from-neutral-50 to-neutral-100",
            "flex items-center justify-center"
        )}>
            Liar's Calculator &copy; 2025{currentYear()} Mateusz Wojewódzki
        </footer>
    )
}

export default Footer