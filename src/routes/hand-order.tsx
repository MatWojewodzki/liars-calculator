import { createFileRoute } from '@tanstack/react-router'
import HandComparisonChart from "../components/charts/HandComparisonChart.tsx"
import HandComparisonChart1Card from "../components/charts/HandComparisonChart1Card.tsx"
import HandComparisonChart2Cards from "../components/charts/HandComparisonChart2Cards.tsx"
import HandComparisonChart3Cards from "../components/charts/HandComparisonChart3Cards.tsx"
import HandComparisonChart4Cards from "../components/charts/HandComparisonChart4Cards.tsx"
import HandComparisonChart5Cards from "../components/charts/HandComparisonChart5Cards.tsx"

export const Route = createFileRoute('/hand-order')({
  component: Hierarchy,
})

function Hierarchy() {
    return (
        <div className="max-w-5xl lg:mx-auto px-4 py-16">
            <h1 className="text-2xl font-semibold">Suggested order of poker hands according to probability</h1>
            <p className="mt-4">From the highest to the lowest:</p>
            <ol className="list-decimal list-inside mt-4 ps-4">
                <li>Straight flush</li>
                <li>Four of a kind</li>
                <li>Flush</li>
                <li>Full house</li>
                <li>Three of a kind</li>
                <li>Two pair</li>
                <li>Straight</li>
                <li>Pair</li>
                <li>High card</li>
            </ol>

            <p className="mt-4">
                Of course, this is just the maths and you are free to experiment and adjust it based on what do you
                think works best and seems fair to all players.
            </p>
            <h3 className="text-xl mt-12 font-medium">Probability details</h3>
            <p className="mt-4">
                The following chart shows the probability of poker hands existing on the table depending on the number
                of cards drawn from the deck. Keep in mind that these are the odds for specific hands such as
                'a pair of kings' (at least two kings present) or 'a flush of hearts' (at least 5 hearts present).
            </p>
            <HandComparisonChart />
            <p className="mt-4">
                As you can see the suggested order is clear for most of the hands.
            </p>
            <p className="mt-4">
                But why does the straight's plot cross the pair's plot? The answer is that the above graph doesn't take
                into account any cards the player has in their hand as if they were playing blind. You can imagine that
                if you were to guess a pair of cards without any suggestion from your hand, it could be easier to call
                a straight when there are more cards on the table.
            </p>
            <p className="mt-4">
                Let's look at plots that analyze the probability when the player has 1–5 cards in their hand and uses
                them in their call. For every case we will assume the most probable distribution of ranks and suits
                in the player's hand as well as the most likely calls for every poker hand.
            </p>

            <h4 className="text-lg mt-8 font-medium">The player has 1 card</h4>
            <HandComparisonChart1Card />
            <p className="mt-4">
                As expected the odds for a pair call being correct increased much more than for the straight since now
                only one extra card is needed. You can also see straight, two pairs and three of a kind
                changing order when the number of cards is less than 9, but it's negligible because:
            </p>
            <ul className="list-disc list-inside mt-4 ps-4">
                <li>
                    Since the game is usually played by 5–8 players, the minimum number of cards on the table is
                    also 5–8.
                </li>
                <li>The probability is so low, that no one would call these hands at that point in the game.</li>
                <li>The odds are very close to each other anyway.</li>
            </ul>

            <h4 className="text-lg mt-8 font-medium">The player has 2 cards</h4>
            <p className="mt-4">
                We assume that the cards have different ranks (87% likely) and different suits (78% likely).
            </p>
            <HandComparisonChart2Cards />

            <h4 className="text-lg mt-8 font-medium">The player has 3 cards</h4>
            <p className="mt-4">
                Once again, we assume that the cards include 3 different ranks (63% likely), but there are only 2
                distinct suits among them (1 pair + 1 unique, 53% likely).
            </p>
            <HandComparisonChart3Cards />
            <p className="mt-4">
                Here straight becomes more likely than one pair when there are more than 13 cards, but the probabilities
                are almost equal and very high.
            </p>

            <h4 className="text-lg mt-8 font-medium">The player has 4 cards</h4>
            <p className="mt-4">
                This time, we assume that the cards include 3 different ranks (1 pair + 2 unique, 54% likely)
                and 3 distinct suits (1 pair + 2 unique, 61% likely).
            </p>
            <HandComparisonChart4Cards />
            <p className="mt-4">
                In this case two pair becomes more likely than a straight when the number of cards is less than 15.
                However, in a 6-player game we can expect that there are already at least 11–13 cards on the table,
                which means the odds are similar or straight becomes more likely again.
            </p>

            <h4 className="text-lg mt-8 font-medium">The player has 5 cards</h4>
            <p className="mt-4">
                Again, we assume that the cards include 3 different ranks (1 pair + 3 unique, 54% likely)
                and 3 distinct suits (2 pairs + 1 unique, 38% likely).
            </p>
            <HandComparisonChart5Cards />
            <p className="mt-4">
                In the last two cases four of a kind and flush swap the order with less cards on the table, but the
                odds are very close.
            </p>

            <h4 className="text-lg mt-8 font-medium">Conclusion</h4>
            <p className="mt-4">
                Cases presented above confirm that the likelihood of making a true straight call lies between one
                pair and two pair. The order of the other hands remains the same as in the general probability chart.
            </p>
        </div>
    )
}
