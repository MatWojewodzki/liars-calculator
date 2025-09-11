import classNames from "classnames"
import StandardExternalLink from "../common/StandardExternalLink.tsx"
import { useTranslation, Trans } from "react-i18next"
import MaterialSymbol from "../common/MaterialSymbol.tsx";

function currentYear(): string {
    const year = new Date().getFullYear()
    return year === 2025 ? "" : `-${year}`
}


function Footer() {
    const { i18n } = useTranslation()

    return (
        <footer
            className={classNames(
                "py-16 px-4 lg:px-16 xl:px-32",
                "bg-linear-to-t from-neutral-50 to-neutral-100",
                "flex flex-col justify-center gap-4"
            )}
        >
            <div className={classNames(
                "flex flex-col md:flex-row gap-y-12 mb-8",
                "items-center md:items-baseline justify-start md:justify-around"
            )}>
                <p className="text-lg flex">
                    Liar's Calculator
                </p>
                <div className={classNames(
                    "flex items-baseline px-2 gap-2",
                    "bg-white text-sm",
                    "rounded-lg border-6 border-neutral-200"
                )}>
                    <MaterialSymbol iconName="language" className="my-auto" size={20}/>
                    <select
                        id="language-selector"
                        className={classNames(
                            "py-3 pe-4 block w-24"
                        )}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        aria-label="Language selector"
                        value={i18n.resolvedLanguage}
                    >
                        <option value="en">English</option>
                        <option value="pl">Polski</option>
                    </select>
                </div>
            </div>
            <p className="text-sm text-center">
                Liar's Calculator &copy; 2025{currentYear()} Mateusz Wojewódzki
            </p>
            <div className="flex flex-col gap-1 text-center">
                <p className="text-sm text-neutral-500">
                    <Trans
                        i18nKey="footer.contentNotice"
                        ns="layout"
                        components={[<StandardExternalLink href="https://creativecommons.org/licenses/by-nc/4.0/"/>]}
                    />
                </p>
                <p className="text-sm text-neutral-500">
                    <Trans
                        i18nKey="footer.sourceCodeNotice"
                        ns="layout"
                        components={[<StandardExternalLink href="https://github.com/MatWojewodzki/liars-calculator"/>]}
                    />
                </p>
            </div>

        </footer>
    )
}

export default Footer