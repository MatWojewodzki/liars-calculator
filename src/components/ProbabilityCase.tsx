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
        <div className="flex justify-between">
            <div className="flex grow justify-start gap-x-8">
                {handShape.cardGroup1Data && <PlayingCardGroup {...handShape.cardGroup1Data} />}
                {handShape.cardGroup2Data && <PlayingCardGroup {...handShape.cardGroup2Data} />}
            </div>
            <div className="flex flex-col justify-center items-end">
                <p className="flex flex-col justify-center">
                    {(probability * 100).toFixed(2)}%
                </p>
                <p>
                    likely
                </p>
            </div>
        </div>
    )
}

export default ProbabilityCase