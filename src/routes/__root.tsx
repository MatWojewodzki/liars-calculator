import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'

export const Route = createRootRoute({
    component: () => (
        <div className="flex flex-col min-h-dvh max-w-5xl mx-auto">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <TanStackRouterDevtools />
        </div>
    ),
})