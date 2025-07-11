import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/data-source')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Data source</h1>
        <p className="mt-4">
          All probability data used on this website was calculated using my own script written in Python.
          The source code is available on <a
              href="https://github.com/MatWojewodzki/liars-poker-probabilities"
              className="underline"
          >
            GitHub
          </a>.
        </p>
      </div>
  )
}
