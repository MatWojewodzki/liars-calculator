import { useTranslation } from "react-i18next"

import { PokerHand } from "../../schemas/pokerHand.ts"

type pokerHandSelectProps = {
    value: PokerHand | ""
    setValue: (value: PokerHand) => void
}

function PokerHandSelect({ value, setValue }: pokerHandSelectProps) {
    const { t } = useTranslation("calculatorForm")
    return (
        <select
            className="w-full mx-4 pe-4 rounded-md"
            id="pokerHand"
            value={value}
            onChange={(e) => setValue(e.target.value as PokerHand)}
        >
            <option value="" hidden>{t("pokerHandSelectDefault")}</option>
            <PokerHandSelectOption value="highCard"/>
            <PokerHandSelectOption value="pair"/>
            <PokerHandSelectOption value="straight"/>
            <PokerHandSelectOption value="twoPair"/>
            <PokerHandSelectOption value="threeOfAKind"/>
            <PokerHandSelectOption value="fullHouse"/>
            <PokerHandSelectOption value="flush"/>
            <PokerHandSelectOption value="fourOfAKind"/>
            <PokerHandSelectOption value="straightFlush"/>
        </select>
    )
}

function PokerHandSelectOption({ value }: { value: PokerHand }) {
    const { t } = useTranslation("pokerHands")
    return (
        <option value={value}>
            {t(value)}
        </option>
    )
}

export default PokerHandSelect