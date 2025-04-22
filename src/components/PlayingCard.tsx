import MaterialSymbol from "./MaterialSymbol.tsx"
import classNames from "classnames"

function PlayingCard({ isMatching }: { isMatching: boolean }) {
    return (
        <div
            className={classNames("w-32 aspect-[0.716] border-3 flex items-stretch p-1 rounded-md", {
                "border-green-300": isMatching,
                "border-red-300": !isMatching,
            })}
        >
            <div
                className={classNames("flex grow justify-center items-center rounded-md", {
                    "bg-green-200": isMatching,
                    "bg-red-200": !isMatching,
                })}
            >
                <MaterialSymbol
                    iconName={isMatching ? "check_circle" : "cancel"}
                    className={isMatching ? "text-green-500" : "text-red-500"}
                />
            </div>
        </div>
    )
}

export default PlayingCard