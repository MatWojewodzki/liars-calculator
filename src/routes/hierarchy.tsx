import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hierarchy')({
  component: Hierarchy,
})

function Hierarchy() {
    return (
        <>
            <h1>Hierarchy of poker hands in the liar's poker card game</h1>
            <p>From the highest priority to the lowest:</p>
            <ul>
                <li>Straight flush</li>
                <li>Four of a kind</li>
                <li>Flush</li>
                <li>Full house</li>
                <li>Three of a kind</li>
                <li>Straight</li>
                <li>Two pair</li>
                <li>One pair</li>
                <li>High card</li>
            </ul>
        </>
    )
}
