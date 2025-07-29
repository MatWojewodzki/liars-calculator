import {createRootRoute, Link, Outlet} from '@tanstack/react-router'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'

export const Route = createRootRoute({
    component: () => (
        <div className="flex flex-col min-h-dvh w-full">
            <Header />
            <main className="grow flex flex-col">
                <Outlet />
            </main>
            <Footer />
        </div>
    ),
    notFoundComponent: NotFound,
})

function NotFound() {
    return (
        <div className="grow flex flex-col items-center justify-center gap-12 px-4">
            <h1 className="text-7xl font-bold">404</h1>
            <p>
                ← Return to the{" "}
                <Link to="/" className="underline">
                    home page
                </Link>
                .
            </p>
        </div>
    )
}