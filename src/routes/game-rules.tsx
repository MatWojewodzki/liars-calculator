import {createFileRoute} from "@tanstack/react-router"
import StandardInternalLink from "../components/common/StandardInternalLink.tsx"
import StandardExternalLink from "../components/common/StandardExternalLink.tsx";

export const Route = createFileRoute('/game-rules')({
    component: GameRules,
})

function GameRules() {
    return (
        <div className="max-w-5xl lg:mx-auto px-4 py-16">
            <h1 className="text-2xl font-semibold">The rules of liar's poker card game</h1>
            <p className="mt-4">
                Liar's poker is a card game that relates to poker. One of it's greatest advantages is the degree
                of freedom in terms of the number of players. You may find dozens of different variants of the game
                but the contents of this website are relevant to the one described below.
            </p>
            <h2 className="text-xl mt-12 font-medium">The rules</h2>
            <p className="mt-4">
                The game is played using a 24-card deck, ranging from nines to aces,
                with four suits of each rank. The objective is to predict a poker hand that occurs among
                all of the cards distributed among the players, based on the cards in the player's hand
                and declarations of the previous players. In the first round, each player is given one card.
                A chosen player starts the bidding by naming any poker combination, then the gameplay continues
                clockwise.
            </p>
            <p className="mt-4">
                Each subsequent player must take one of two available actions: guess a higher combination or check
                the previous player's declaration, therefore ending the round. If the player checks, everyone reveals
                their cards. If the previous guess turns out to be incorrect, the bidding player loses the round,
                otherwise loses the player who checked. All of the cards are shuffled and dealt once again,
                although this time the loser receives one more card than in the previous round.
                They now become the first player to bet.
            </p>
            <p className="mt-4">
                The game continues until one of the players receives his fifth card. At this point,
                the player with the fewest cards in his hand wins.
            </p>
            <h2 className="text-xl mt-12 font-medium">Poker combinations</h2>
            <p className="mt-4">
                Bidding in liar's poker differs from the poker because, along with a poker hand, the player
                has to specify it's parameters. A combination is considered higher than another if:
            </p>
            <ul className="list-disc list-inside mt-4 ps-4">
                <li>
                    it's a higher poker hand or...
                </li>
                <li>
                    it's the same poker hand but the more important parameter is higher or...
                </li>
                <li>
                    it's the same poker hand, the more important parameter is equal and the less important
                    parameter is higher.
                </li>
            </ul>
            <h2 className="text-xl mt-12 font-medium">Poker hand ranking</h2>
            <p className="mt-4">
                Before the game begins, the ranking of poker hands must be specified and all players should familiarise
                themselves with it. You may find different hierarchies across the internet, but keep in mind that they
                often refer to other variants of the game.
            </p>
            <p className="mt-4">
                The ranking of poker hands we suggest, from highest to lowest, along with their parameters:
            </p>
            <ol className="list-decimal list-inside mt-4 ps-4">
                <li>
                    high straight flush (also known as a royal flush) (<i className="italic">rank</i>) - ranks range from 10 to A
                </li>
                <li>
                    low straight flush (also known as a straight flush) (<i className="italic">rank</i>) - ranks range from 9 to K
                </li>
                <li>
                    four of a kind (<i className="italic">rank</i>)
                </li>
                <li>
                    flush (<i className="italic">suit</i>)
                </li>
                <li>
                    full house (<i className="italic">rank</i>, <i className="italic">rank</i>) - the rank
                    specifying the three cards is the more important parameter
                </li>
                <li>
                    three of a kind (<i className="italic">rank</i>)
                </li>
                <li>
                    two pair (<i className="italic">rank</i>, <i className="italic">rank</i>) - the higher
                    rank is the more important parameter
                </li>
                <li>
                    high straight - ranks range from 10 to A
                </li>
                <li>
                    low straight - ranks range from 9 to K
                </li>
                <li>
                    pair (<i className="italic">rank</i>)
                </li>
                <li>
                    high card (<i className="italic">rank</i>)
                </li>
            </ol>
            <p className="mt-4">
                You will find the reasoning behind this order in the{" "}
                <StandardInternalLink to="/hand-ranking">poker hand order section</StandardInternalLink>
                .
            </p>
            <p className="mt-4">
                Here's a different hierarchy, taken from the{" "}
                <StandardExternalLink
                    href="https://pl.wikipedia.org/wiki/Blef_(gra)#Starsze%C5%84stwo_i_wymagane_parametry_typ%C3%B3w_zg%C5%82osze%C5%84"
                >
                    Polish Wikipedia page for the game
                </StandardExternalLink>
                :
            </p>
            <ol className="list-decimal list-inside mt-4 ps-4">
                <li>
                    high straight flush
                </li>
                <li>
                    low straight flush
                </li>
                <li>
                    four of a kind
                </li>
                <li>
                    flush
                </li>
                <li>
                    full house
                </li>
                <li>
                    three of a kind
                </li>
                <li>
                    high straight
                </li>
                <li>
                    low straight
                </li>
                <li>
                    two pair
                </li>
                <li>
                    pair
                </li>
                <li>
                    high card
                </li>
            </ol>
            <p className="mt-4">
                Here the positions of two pair and straight are reversed.
            </p>
            <h2 className="text-xl mt-12 font-medium">Suit ranking</h2>
            <p className="mt-4">
                Along with the poker hand ranking, you also need to specify the suit hierarchy.
                You may choose whichever order you prefer — below, we present the reversed lexicographical order
                commonly used in other games:
            </p>
            <ol className="list-decimal list-inside mt-4 ps-4">
                <li>
                    ♠ Spades
                </li>
                <li>
                    ♥ Hearts
                </li>
                <li>
                    ♦ Diamonds
                </li>
                <li>
                    ♣ Clubs
                </li>
            </ol>
            <p className="mt-4">
                The ranking of suits is needed to determine the hierarchy of flushes, straight flushes
                and royal flushes.
            </p>
            <h2 className="text-xl mt-12 font-medium">Alternative rules</h2>
            <ul className="list-disc list-inside mt-4 ps-4">
                <li className="mt-4">
                    You may change the maximum number of cards in a player's hand depending on the number
                    of players.
                </li>
                <li className="mt-4">
                    After someone receives the last card, you may kick them from the game
                    and continue playing until only one player remains.
                </li>
                <li className="mt-4">
                    You may allow any player to check the last guess, even if it's not their turn.
                </li>
                <li className="mt-4">
                    If a player calls the highest poker hand available and the following player doesn't want
                    to request a check, the players may now predict poker hands among the cards not dealt.
                </li>
                <li className="mt-4">
                    Another option is to play as long as some cards remain undealt. This variant ensures that
                    even the highest poker hands at some point in the game will become fairly likely to be present.
                    When the last card is dealt, the player with the most cards is kicked
                    or the player with the fewest cards wins the game.
                </li>
            </ul>
        </div>
    )
}