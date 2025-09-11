import { createFileRoute } from '@tanstack/react-router'
import HandComparisonChart from "../components/charts/HandComparisonChart.tsx"
import PairStraightComparisonChart from "../components/charts/PairStraightComparisonChart.tsx"
import StandardInternalLink from "../components/common/StandardInternalLink.tsx"
import { useTranslation, Trans } from "react-i18next"

export const Route = createFileRoute('/hand-ranking')({
  component: Hierarchy,
})

function Hierarchy() {
    const { t } = useTranslation(["handRanking", "pokerHands"])

    const pokerHands = [
        { key: "straightFlush", hasVariants: true },
        { key: 'fourOfAKind' },
        { key: 'flush' },
        { key: 'fullHouse' },
        { key: 'threeOfAKind' },
        { key: 'twoPair' },
        { key: 'straight', hasVariants: true },
        { key: 'pair' },
        { key: 'highCard' },
    ]

    return (
        <div className="max-w-5xl lg:mx-auto px-4 py-16">
            <h1 className="text-2xl font-semibold">
                {t("title")}
            </h1>
            <p className="mt-4">
                {t("ranking.intro")}
            </p>
            <ol className="list-decimal list-inside mt-4 ps-4">
                {pokerHands.map(({ key, hasVariants }) => (
                    <li key={key} className="mt-2">
                        {hasVariants
                            ? t("ranking.straightVariants", { handName: t(key, { ns: "pokerHands" }) })
                            : t(key, { ns: "pokerHands" })}
                    </li>
                ))}
            </ol>
            <p className="mt-4">
                <Trans
                    i18nKey="ranking.additionalNotes"
                    ns="handRanking"
                    components={[<StandardInternalLink to="/game-rules"/>]}
                />
            </p>
            <h2 className="text-xl mt-12 font-medium">
                {t("probabilityDetails.heading")}
            </h2>
            <p className="mt-4">
                {t("probabilityDetails.chartIntro")}
            </p>
            <HandComparisonChart />
            <p className="mt-4">
                {t("probabilityDetails.rankingExplanation")}
            </p>
            <p className="mt-4">
                {t("probabilityDetails.pairAndStraightBehaviour")}
            </p>
            <p className="mt-4">
                {t("probabilityDetails.straightMoreLikelyReason")}
            </p>
            <p className="mt-4">
                {t("probabilityDetails.pairAndStraightComparisonScenario")}
            </p>
            <PairStraightComparisonChart />
            <p className="mt-4">
                {t("probabilityDetails.comparisonConclusion")}
            </p>
        </div>
    )
}
