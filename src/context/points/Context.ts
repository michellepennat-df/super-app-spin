import { createContext, useContext } from 'react'
import { State } from './Types'

export const initialState: State = {
    points: 1000,
    addPoints: () => { },
    setPoints: () => { },
    getPoints: () => { }
}

export const PointsContext = createContext(initialState)

export const usePointsContext = () => {
    const context = useContext(PointsContext)

    if (!context)
        throw Error('This context only can be used by PointsContext Provider children')

    return context
}