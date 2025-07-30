import classNames from "classnames"

function MaterialSymbol({ iconName, className }: { iconName: string, className?: string }) {
    return (
        <span className={classNames("material-symbols-outlined", className)}>
            {iconName}
        </span>
    )
}

export default MaterialSymbol