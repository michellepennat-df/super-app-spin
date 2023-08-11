import { ReactNode } from "react"
import { NavigationContainer } from "@react-navigation/native"

export const renderWithNavigator = (component: ReactNode) => {
    return (
        // @ts-ignore
        <NavigationContainer>
            {component}
        </NavigationContainer>
    )
}