import StandardInternalLink from "../common/StandardInternalLink.tsx"

function ErrorPage({ header, description }: { header: string, description: string }) {
    return (
        <div className="grow flex flex-col justify-center gap-12 px-4">
            <h1 className="text-7xl font-bold text-center">
                {header}
            </h1>
            <div className="flex flex-col gap-6 text-center">
                <p>
                    {description}
                </p>
                <p>
                    <StandardInternalLink to="/">
                        ← Return to the home page
                    </StandardInternalLink>
                </p>
            </div>
        </div>
    )
}

export default ErrorPage