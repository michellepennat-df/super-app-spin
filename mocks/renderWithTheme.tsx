import { ReactNode } from "react"
import { ThemeProvider } from "../src"

export const renderWithTheme = (component: ReactNode) => {
    return (
        // @ts-ignore
        <ThemeProvider value={null}>
            {component}
        </ThemeProvider>
    )
}