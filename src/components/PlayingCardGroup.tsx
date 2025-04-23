import PlayingCard from "./PlayingCard"

export type CardGroupData = { matchingCardCount: number, totalCardCount: number }

function PlayingCardGroup({ matchingCardCount, totalCardCount}: CardGroupData) {

    const cardIndexes = Array.from({ length: totalCardCount }, (_, i) => i)
    return (
        <div className="flex gap-2">
            {cardIndexes.map(idx => <PlayingCard key={idx} isMatching={idx < matchingCardCount}/>)}
        </div>
    )
}

export default PlayingCardGroup