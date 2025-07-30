import classNames from "classnames";
import StandardExternalLink from "../common/StandardExternalLink.tsx";

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
            <div className="flex flex-col gap-1">
                <p className="text-sm text-neutral-500">
                    The content on this website is licensed
                    under the{" "}
                    <StandardExternalLink
                        href="https://creativecommons.org/licenses/by-nc/4.0/"
                    >
                        CC BY-NC 4.0
                    </StandardExternalLink>.
                </p>
                <p className="text-sm text-neutral-500">
                    The source code is available on{" "}
                    <StandardExternalLink
                        href="https://github.com/MatWojewodzki/liars-calculator"
                    >
                        GitHub
                    </StandardExternalLink>.
                </p>
            </div>

        </footer>
    )
}

export default Footer