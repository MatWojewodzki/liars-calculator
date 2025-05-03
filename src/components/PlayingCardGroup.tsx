import PlayingCard from "./PlayingCard"

export type CardGroupData = { matchingCardCount: number, totalCardCount: number }

function PlayingCardGroup({ matchingCardCount, totalCardCount}: CardGroupData) {

    const cardIndexes = Array.from({ length: totalCardCount }, (_, i) => i)
    return (
        <div className="flex flex-wrap gap-1 md:gap-2">
            {cardIndexes.map(idx => <PlayingCard key={idx} isMatching={idx < matchingCardCount}/>)}
        </div>
    )
}

export default PlayingCardGroup