import {createFileRoute} from '@tanstack/react-router'
import CalculatorForm from "../components/calculator-form/CalculatorForm.tsx"
import {ReactNode} from "react";
import classNames from "classnames";
import StandardInternalLink from "../components/common/StandardInternalLink.tsx"
import { useTranslation, Trans } from "react-i18next"

export const Route = createFileRoute('/')({
    component: Index
})

function Index() {
    const { t } = useTranslation("index")
    return (
        <div className="grow flex flex-col">
            <section className="py-16 px-4 flex flex-col items-center bg-linear-to-b from-neutral-50 to-neutral-100">

                <h1 className="text-center font-extrabold text-5xl">{t("header.title")}</h1>
                <p className="text-center text-2xl mt-4 mb-12">{t("header.subtitle")}</p>

                <CalculatorForm />
            </section>
            <div className="grow flex flex-col p-16">
                <section className={classNames(
                    "flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 lg:gap-24 2xl:gap-32"
                )}>
                    <InfoSection header={t("infoSection1.title")}>
                        <Trans
                            i18nKey="infoSection1.content"
                            ns="index"
                            components={[<i className="italic"/>]}
                        />
                    </InfoSection>
                    <InfoSection header={t("infoSection2.title")}>
                        <Trans
                            i18nKey="infoSection2.content"
                            ns="index"
                            components={[<StandardInternalLink to="/hand-ranking"/>]}
                        />
                    </InfoSection>
                    <InfoSection header={t("infoSection3.title")}>
                        <Trans
                            i18nKey="infoSection3.content"
                            ns="index"
                            components={[<StandardInternalLink to="/game-rules"/>]}
                        />
                    </InfoSection>
                </section>
            </div>
        </div>
    )
}

function InfoSection({ header, children }: { header: string, children?: ReactNode }) {
    return (
        <div className="grow flex flex-col gap-4 items-center lg:max-w-64 2xl:max-w-96">
            <h2 className="text-xl font-semibold">
                {header}
            </h2>
            <p className="text-center">
                {children}
            </p>
        </div>
    )
}