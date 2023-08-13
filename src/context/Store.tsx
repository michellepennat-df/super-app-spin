import React, {ReactNode, useReducer} from 'react';
import {ADD_POINTS, SELECT_PARTNER, SET_POINTS} from '.';
import useFetch from '../hooks/useFetch';
import {Context, initialState} from './Context';
import PointsReducer from './Reducer';

type PointsResponse = {data: number};

const AppProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(PointsReducer, initialState);

  const {fetchData, postData} = useFetch<PointsResponse>();
  const addPoints = (points: number) => {
    dispatch({
      type: ADD_POINTS,
      payload: points,
    });
  };

  const setPoints = (points: number) => {
    dispatch({
      type: SET_POINTS,
      payload: points,
    });
  };

  const getPoints = () => {
    fetchData('points').then(result => {
      setPoints(result.data);
    });
  };

  const selectPartner = (partner: any) => {
    dispatch({
      type: SELECT_PARTNER,
      payload: partner,
    });
  };

  const postMovement = () => {
    // state.selectedPartner, state.points
    postData('used').then(result => {
      setPoints(result.data);
      selectPartner(result.data);
    });
  };

  return (
    <Context.Provider
      value={{
        points: state.points,
        selectedPartner: state.selectedPartner,
        addPoints,
        setPoints,
        getPoints,
        selectPartner,
      }}>
      {children}
    </Context.Provider>
  );
};

export default AppProvider;
