import { ReactNode } from 'react';
import { Context } from '../src/context/Context';
import { State } from '../src/context/Types';

export const renderWithPoints = (component: ReactNode, value: State) => {
  return <Context.Provider value={value}>{component}</Context.Provider>;
};
