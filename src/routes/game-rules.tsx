import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/game-rules')({
  component: GameRules,
})

function GameRules() {
  return <div>Hello "/game-rules"!</div>
}
