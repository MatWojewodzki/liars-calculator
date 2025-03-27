import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/calculator')({
    component: Calculator,
})

function Calculator() {
    return (
        <div>
            Hello from Calculator!
        </div>
    )
}