import React, { createContext, ReactChild, ReactChildren, useReducer } from 'react';
import { InitialState, UserReducer } from '../reducers/userReducer';
interface ContextType {
  state: any
  dispatch: React.Dispatch<{ type: string; value: unknown }>;
}

interface AuxProps {
  children: ReactChild | ReactChildren;
}
export const UserContext = createContext<ContextType | null>(null);

export default function ReducerContext({children}:AuxProps) {
  const [state, dispatch] = useReducer(UserReducer, InitialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <>{children}</>
    </UserContext.Provider>
  )
}