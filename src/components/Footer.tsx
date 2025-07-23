import classNames from "classnames";

function currentYear(): string {
    const year = new Date().getFullYear()
    return year === 2025 ? "" : `-${year}`
}


function Footer() {
    return (
        <footer
            className={classNames(
                "text-center py-16",
                "bg-linear-to-t from-neutral-50 to-neutral-100",
                "flex flex-col items-center justify-center gap-4"
            )}
        >
            <p className="text-sm">
                Liar's Calculator &copy; 2025{currentYear()} Mateusz Wojewódzki
            </p>
            <p className="text-sm text-neutral-500">
                Source code available on <a
                    href="https://github.com/MatWojewodzki/liars-calculator"
                    className="underline"
                >GitHub</a>
            </p>
        </footer>
    )
}

export default Footer