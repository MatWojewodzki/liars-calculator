import MaterialSymbol from "../common/MaterialSymbol.tsx"
import classNames from "classnames"

function PlayingCard({ isMatching }: { isMatching: boolean }) {
    return (
        <div
            className={classNames(
                "aspect-[0.716] flex items-stretch p-1 rounded-md md:rounded-xl",
                "w-10 sm:w-20 lg:w-32 xl:w-40 ",
                "border-2 sm:border-2 md:border-3 lg:border-4 ",
                {
                    "border-green-400": isMatching,
                    "border-red-400": !isMatching,
                }
            )}
        >
            <div
                className={classNames("flex grow justify-center items-center rounded-sm md:rounded-md", {
                    "bg-green-200": isMatching,
                    "bg-red-200": !isMatching,
                })}
            >
                <MaterialSymbol
                    iconName={isMatching ? "check_circle" : "cancel"}
                    className={isMatching ? "text-green-400" : "text-red-400"}
                />
            </div>
        </div>
    )
}

export default PlayingCard