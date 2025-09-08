import { createFileRoute } from '@tanstack/react-router'
import StandardExternalLink from "../components/common/StandardExternalLink.tsx"
import { useTranslation, Trans } from "react-i18next"

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    const { t } = useTranslation("about")
    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <h1 className="text-2xl font-semibold">About</h1>
            <p className="mt-4">
                <Trans i18nKey="content" ns="about">
                    Liar's Calculator is a website allowing you to check the exact probability of a player's guess
                    being correct in a liar's poker card game. It also features a description of the game rules
                    and a poker hand ranking advised according to probability.
                    All the probability data presented on this website has been calculated using a Python script available
                    on{" "}
                    <StandardExternalLink
                        href="https://github.com/MatWojewodzki/liars-poker-probabilities/blob/main/probability_data_generator.py"
                    >
                        GitHub
                    </StandardExternalLink>
                    .
                </Trans>
            </p>
            <p className="mt-4 italic">
                {t("notice")}
            </p>
        </div>
    )
}
