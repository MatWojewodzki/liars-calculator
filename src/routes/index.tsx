import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <h1 className="text-xl font-bold italic">Liar's calculator</h1>
        </div>
    )
}