import { createFileRoute } from '@tanstack/react-router'
import HandComparisonChart from "../components/charts/HandComparisonChart.tsx"
import PairStraightComparisonChart from "../components/charts/PairStraightComparisonChart.tsx"
import StandardInternalLink from "../components/common/StandardInternalLink.tsx"

export const Route = createFileRoute('/hand-ranking')({
  component: Hierarchy,
})

function Hierarchy() {
    return (
        <div className="max-w-5xl lg:mx-auto px-4 py-16">
            <h1 className="text-2xl font-semibold">
                Suggested ranking of poker hands according to probability
            </h1>
            <p className="mt-4">
                Poker hands from the highest to the lowest:
            </p>
            <ol className="list-decimal list-inside mt-4 ps-4">
                <li>straight flush (small and large)</li>
                <li>four of a kind</li>
                <li>flush</li>
                <li>full house</li>
                <li>three of a kind</li>
                <li>two pair</li>
                <li>straight (small and large)</li>
                <li>pair</li>
                <li>high card</li>
            </ol>
            <p className="mt-4">
                Of course, this is just the maths and you should feel free to experiment and adjust it based on what
                do you think works best and seems fair to all players. Please note that this ranking was created
                on the assumption that we are using a 24-card deck. For more information about the relevant game
                variant check the{" "}
                <StandardInternalLink to="/game-rules">game rules</StandardInternalLink>
                .
            </p>
            <h2 className="text-xl mt-12 font-medium">Probability details</h2>
            <p className="mt-4">
                The following chart shows the probability of poker hands existing on the table depending on the number
                of cards drawn from the deck. Keep in mind that these are the odds for specific hands — for example,
                the probability of a pair refers to the probability of a 'pair of queens' or 'a pair of kings'.
            </p>
            <HandComparisonChart />
            <p className="mt-4">
                As you can see, the suggested ranking of the hands is pretty clear.
            </p>
            <p className="mt-4">
                It may come as a surprise that a straight becomes more likely than a pair when there are 10 or more
                cards on the table, but no one would rank a pair higher anyway, since it's the essential poker hand
                in early game — sometimes even before straights are possible.
            </p>
            <p className="mt-4">
                You may ask why it’s even possible for a straight to be more likely than a pair.
                The answer is that the graph above compares poker hands based on the raw probability
                of a hand appearing on the table. In an actual game, however, players may use cards
                from their own hands or ones implied by previous bids.
            </p>
            <p className="mt-4">
                To dispel any doubts, we can consider a situation in which a player has one card in their hand
                and uses it in their bid.
            </p>
            <PairStraightComparisonChart />
            <p className="mt-4">
                We can see that, in this case, the probability of a pair is much higher than that of a straight.
            </p>
        </div>
    )
}
