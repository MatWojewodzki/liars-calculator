import React from "react";

function StandardExternalLink({ href, children }: { href: string, children?: React.ReactNode }) {
    return (
        <a
            href={href}
            className="underline hover:decoration-2"
        >
            {children}
        </a>
    )
}

export default StandardExternalLink