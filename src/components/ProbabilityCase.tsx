import PlayingCardGroup, { CardGroupData } from "./PlayingCardGroup.tsx"

type ProbabilityCaseProps = {
    handShape: {
        cardGroup1Data?: CardGroupData,
        cardGroup2Data?: CardGroupData,
    }
    probability: number
}

function ProbabilityCase({ handShape, probability }: ProbabilityCaseProps) {
    return (
        <div className="flex">
            {handShape.cardGroup1Data && <PlayingCardGroup {...handShape.cardGroup1Data} />}
            {handShape.cardGroup2Data && <PlayingCardGroup {...handShape.cardGroup2Data} />}
            <p>{(probability * 100).toFixed(2)}%</p>
        </div>
    )
}

export default ProbabilityCase