import classNames from "classnames"

function MaterialSymbol({ iconName, className, size }: { iconName: string, className?: string, size?: 20 | 24 }) {
    size = size ?? 24
    return (
        <span
            className={classNames("material-symbols-outlined", className)}
            style={{
                fontSize: `${size}px`,
                fontVariationSettings:
                    `'FILL' 0,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' ${size}`
            }}
        >
            {iconName}
        </span>
    )
}

export default MaterialSymbol