import { createContext, useContext } from 'react';
import { State } from './Types';

export const initialState: State = {
  points: 0,
  addPoints: () => {},
  setPoints: () => {},
  getPoints: () => {},
  selectPartner: () => {},
  selectedPartner: null,
};

export const Context = createContext(initialState);

export const useAppContext = () => {
  const context = useContext(Context);

  if (!context)
    throw Error(
      'This context only can be used by Context Provider children',
    );

  return context;
};
