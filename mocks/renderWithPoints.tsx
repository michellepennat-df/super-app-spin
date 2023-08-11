import { ReactNode } from "react"
import { PointsContext } from "../src/context/points/Context"
import { State } from "../src/context/points/Types"

export const renderWithPoints = (component: ReactNode, value: State) => {
    return (
        <PointsContext.Provider
            value={value}
        >
            {component}
        </PointsContext.Provider>
    )
}