import { useState, useEffect } from "react"

function useWindowWidth(delay = 150) {
    const [width, setWidth] = useState(() => window.innerWidth)

    useEffect(() => {
        let timeoutId: number

        const handleResize = () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                setWidth(window.innerWidth)
            }, delay)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            clearTimeout(timeoutId)
            window.removeEventListener("resize", handleResize)
        }
    }, [delay])

    return width
}

export default useWindowWidth