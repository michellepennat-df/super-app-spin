import moment from 'moment';
import 'moment/locale/es';
import React, { ReactNode, useReducer } from 'react';
import { ADD_POINTS, SELECT_PARTNER, SET_POINTS } from '.';
import useFetch from '../hooks/useFetch';
import { Context, initialState } from './Context';
import PointsReducer from './Reducer';
moment.locale('es');

const AppProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(PointsReducer, initialState);

  const {fetchData, postData, putData} = useFetch<any>();
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

  const postMovement = async (points: number) => {
    const id = ~~(Math.random() * 100 + 10);

    const allUsed = await fetchData('used');

    let lastId =
      allUsed.reduce(
        (prev: any, curr: any) => (prev < +curr.id ? curr.id : prev),
        Number.MIN_SAFE_INTEGER,
      ) + 1;

    return postData('used', {
      id: lastId,
      data: [
        {
          title: 'Hoy',
          data: [
            {
              entity: state.selectedPartner?.name,
              date: moment().locale('es').format('DD [de] MMMM [de] YYYY'),
              points: points,
              operation: 'used',
              transactionNo: `5dced89c-2b6e-4a1c-a715-c19b0a5${id}`,
              id,
            },
          ],
        },
      ],
    });
  };

  const putPoints = (points: number) => {
    return putData('points', {
      "data": state.points - points
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
        postMovement,
        putPoints,
      }}>
      {children}
    </Context.Provider>
  );
};

export default AppProvider;
