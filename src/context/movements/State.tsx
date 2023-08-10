import React, { ReactNode, useReducer } from 'react'
import { PointsContext, initialState } from './Context';
import PointsReducer from './Reducer';
import { ADD_POINTS, SET_POINTS } from '..';
import useFetch from '../../hooks/useFetch';

type PointsResponse = { data: number }

const PointsProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(PointsReducer, initialState)

    const { fetchData } = useFetch<PointsResponse>()
    const addPoints = (points: number) => {
        dispatch({
            type: ADD_POINTS,
            payload: points
        })
    }

    const setPoints = (points: number) => {
        dispatch({
            type: SET_POINTS,
            payload: points
        })
    }

    const getPoints = () => {
        fetchData('points').then((result) => {
            setPoints(result.data)
        })
    }


    return (
        <PointsContext.Provider
            value={{
                points: state.points,
                addPoints,
                setPoints,
                getPoints
            }}
        >
            {children}
        </PointsContext.Provider>
    );
}

export default PointsProvider;