import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/data-source')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Data source</h1>
        <p className="mt-4">
          All poker hand probability data used on this website has been calculated using a Python script.
          The source code is available on <a
              href="https://github.com/MatWojewodzki/liars-poker-probabilities/blob/main/probability_data_generator.py"
              className="underline"
          >
            GitHub
          </a>.
        </p>
      </div>
  )
}
