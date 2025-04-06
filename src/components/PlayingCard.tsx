
function PlayingCard({ isMatching }: { isMatching: boolean }) {
    return (
        <div className="flex justify-center items-center w-16 aspect-[0.716] bg-neutral-400 rounded-md">{ isMatching ? "+" : "-"}</div>
    )
}

export default PlayingCard