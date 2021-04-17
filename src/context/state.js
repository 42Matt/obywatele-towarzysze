import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

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
      throw new Error();
  }
};

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

ContextAppWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export const useAppContext = () => useContext(AppContext);
