import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case '2':
      return { ...state, number: 2 };
    case '3':
      return { ...state, number: 3 };
    case '4':
      return { ...state, number: 4 };
    default:
      throw new Error();
  }
};

export const ContextAppWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    players: {},
    number: null,
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
