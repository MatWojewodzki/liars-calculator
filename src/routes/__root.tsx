import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'

export const Route = createRootRoute({
    component: () => (
        <div className="flex flex-col min-h-dvh w-full">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    ),
})