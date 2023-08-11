import { ReactNode } from "react"
import { ThemeProvider } from "../src"

export const renderWithTheme = (component: ReactNode) => {
    return (
        <ThemeProvider >
            {component}
        </ThemeProvider>
    )
}