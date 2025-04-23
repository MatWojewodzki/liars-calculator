function currentYear(): string {
    const year = new Date().getFullYear()
    return year === 2025 ? "" : `-${year}`
}


function Footer() {
    return (
        <footer className="text-center bg-neutral-50 h-64 flex items-center justify-center">
            Liar's Calculator &copy; 2025{currentYear()} Mateusz Wojewódzki
        </footer>
    )
}

export default Footer