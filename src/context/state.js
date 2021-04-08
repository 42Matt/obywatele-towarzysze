import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case '2':
      return { ...state, players: 2 };
    case '3':
      return { ...state, players: 3 };
    case '4':
      return { ...state, players: 4 };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const ContextAppWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    players: null,
  });

  const reducerForContext = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={reducerForContext}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
