import {ReactNode} from 'react'
import {Link, LinkProps} from "@tanstack/react-router"

function StandardInternalLink({ to, children }: Pick<LinkProps, "to"> & { children: ReactNode }) {
    return (
        <Link
            to={to}
            className="underline hover:decoration-2"
        >
            {children}
        </Link>
    )
}

export default StandardInternalLink