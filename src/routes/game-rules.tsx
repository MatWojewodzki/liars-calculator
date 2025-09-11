import {createFileRoute} from "@tanstack/react-router"
import StandardInternalLink from "../components/common/StandardInternalLink.tsx"
import StandardExternalLink from "../components/common/StandardExternalLink.tsx"
import { useTranslation, Trans } from "react-i18next"

export const Route = createFileRoute('/game-rules')({
    component: GameRules,
})

function GameRules() {
    const { t } = useTranslation("gameRules")
    return (
        <div className="max-w-5xl lg:mx-auto px-4 py-16">
            <h1 className="text-2xl font-semibold">{t("title")}</h1>
            <p className="mt-4">
                {t("description")}
            </p>
            <h2 className="text-xl mt-12 font-semibold">{t("rules.heading")}</h2>
            <p className="mt-4">
                {t("rules.deckAndObjective")}
            </p>
            <p className="mt-4">
                {t("rules.playerActions")}
            </p>
            <p className="mt-4">
                {t("rules.endCondition")}
            </p>
            <h2 className="text-xl mt-12 font-semibold">{t("pokerCombinations.heading")}</h2>
            <p className="mt-4">
                {t("pokerCombinations.combinationDefinition")}
            </p>
            <ul className="list-disc list-inside mt-4 ps-4">
                <li className="mt-2">
                    {t("pokerCombinations.comparisonCriteria.higherHand")}
                </li>
                <li className="mt-2">
                    {t("pokerCombinations.comparisonCriteria.moreImportantParameterHigher")}
                </li>
                <li className="mt-2">
                    {t("pokerCombinations.comparisonCriteria.lessImportantParameterHigher")}
                </li>
            </ul>
            <h2 className="text-xl mt-12 font-semibold">{t("pokerHandRanking.heading")}</h2>
            <p className="mt-4">
                {t("pokerHandRanking.intro")}
            </p>
            <p className="mt-4">
                {t("pokerHandRanking.suggestedRanking.intro")}
            </p>
            <ol className="list-decimal list-inside mt-4 ps-4">
                <li className="mt-2">
                    <Trans
                        i18nKey="pokerHandRanking.suggestedRanking.hands.highStraightFlush"
                        ns="gameRules"
                        components={[<b className="font-semibold"/>, <i className="italic"/>]}
                    />
                </li>
                <li className="mt-2">
                    <Trans
                        i18nKey="pokerHandRanking.suggestedRanking.hands.lowStraightFlush"
                        ns="gameRules"
                        components={[<b className="font-semibold"/>, <i className="italic"/>]}
                    />
                </li>
                <li className="mt-2">
                    <Trans
                        i18nKey="pokerHandRanking.suggestedRanking.hands.fourOfAKind"
                        ns="gameRules"
                        components={[<b className="font-semibold"/>, <i className="italic"/>]}
                    />
                </li>
                <li className="mt-2">
                    <Trans
                        i18nKey="pokerHandRanking.suggestedRanking.hands.flush"
                        ns="gameRules"
                        components={[<b className="font-semibold"/>, <i className="italic"/>]}
                    />
                </li>
                <li className="mt-2">
                    <Trans
                        i18nKey="pokerHandRanking.suggestedRanking.hands.fullHouse"
                        ns="gameRules"
                        components={[<b className="font-semibold"/>, <i className="italic"/>, <i className="italic"/>]}
                    />
                </li>
                <li className="mt-2">
                    <Trans
                        i18nKey="pokerHandRanking.suggestedRanking.hands.threeOfAKind"
                        ns="gameRules"
                        components={[<b className="font-semibold"/>, <i className="italic"/>]}
                    />
                </li>
                <li className="mt-2">
                    <Trans
                        i18nKey="pokerHandRanking.suggestedRanking.hands.twoPair"
                        ns="gameRules"
                        components={[<b className="font-semibold"/>, <i className="italic"/>, <i className="italic"/>]}
                    />
                </li>
                <li className="mt-2">
                    <Trans
                        i18nKey="pokerHandRanking.suggestedRanking.hands.highStraight"
                        ns="gameRules"
                        components={[<b className="font-semibold"/>, <i className="italic"/>]}
                    />
                </li>
                <li className="mt-2">
                    <Trans
                        i18nKey="pokerHandRanking.suggestedRanking.hands.lowStraight"
                        ns="gameRules"
                        components={[<b className="font-semibold"/>, <i className="italic"/>]}
                    />
                </li>
                <li className="mt-2">
                    <Trans
                        i18nKey="pokerHandRanking.suggestedRanking.hands.pair"
                        ns="gameRules"
                        components={[<b className="font-semibold"/>, <i className="italic"/>]}
                    />
                </li>
                <li className="mt-2">
                    <Trans
                        i18nKey="pokerHandRanking.suggestedRanking.hands.highCard"
                        ns="gameRules"
                        components={[<b className="font-semibold"/>, <i className="italic"/>]}
                    />
                </li>
            </ol>
            <p className="mt-4">
                <Trans
                    i18nKey="pokerHandRanking.suggestedRanking.reasoning"
                    ns="gameRules"
                    components={[<StandardInternalLink to="/hand-ranking"/>]}
                />
            </p>
            <p className="mt-4">
                <Trans
                    i18nKey="pokerHandRanking.polishWikipediaRanking"
                    ns="gameRules"
                    components={[
                        <StandardExternalLink
                            href="https://pl.wikipedia.org/wiki/Blef_(gra)#Starsze%C5%84stwo_i_wymagane_parametry_typ%C3%B3w_zg%C5%82osze%C5%84"
                        />
                    ]}
                />
            </p>
            <h2 className="text-xl mt-12 font-semibold">{t("suitRanking.heading")}</h2>
            <p className="mt-4">
                {t("suitRanking.intro")}
            </p>
            <ol className="list-decimal list-inside mt-4 ps-4">
                <li className="mt-2">
                    {t("suitRanking.suits.spades")}
                </li>
                <li className="mt-2">
                    {t("suitRanking.suits.hearts")}
                </li>
                <li className="mt-2">
                    {t("suitRanking.suits.diamonds")}
                </li>
                <li className="mt-2">
                    {t("suitRanking.suits.clubs")}
                </li>
            </ol>
            <h2 className="text-xl mt-12 font-semibold">{t("alternativeRules.heading")}</h2>
            <ul className="list-disc list-inside mt-4 ps-4">
                <li className="mt-2">
                    {t("alternativeRules.rules.maxNumOfCardsAdjusted")}
                </li>
                <li className="mt-2">
                    {t("alternativeRules.rules.kickingPlayers")}
                </li>
                <li className="mt-2">
                    {t("alternativeRules.rules.anyoneCanCheck")}
                </li>
                <li className="mt-2">
                    {t("alternativeRules.rules.predictCardsNotDealt")}
                </li>
                <li className="mt-2">
                    {t("alternativeRules.rules.useTheEntireDeck")}
                </li>
            </ul>
        </div>
    )
}