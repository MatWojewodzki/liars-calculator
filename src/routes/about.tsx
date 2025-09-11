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
                <Trans
                    i18nKey="content"
                    ns="about"
                    components={[
                        <StandardExternalLink
                            href="https://github.com/MatWojewodzki/liars-poker-probabilities/blob/main/probability_data_generator.py"
                        />
                    ]}
                />
            </p>
            <p className="mt-4 italic">
                {t("notice")}
            </p>
        </div>
    )
}
