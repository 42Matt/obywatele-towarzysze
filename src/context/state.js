import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { Player } from '@/utils/playerBuilder';

const AppContext = createContext();

const init = (number) => {
  const playerOne = new Player('Gracz 1', 1, { hp: 120 });
  const playerTwo = new Player('Gracz 2', 1, { hp: 120 });
  const playerThree = new Player('Gracz 3', 1, { hp: 120 });
  const playerFour = new Player('Gracz 4', 1, { hp: 120 });

  switch (number) {
    case 2:
      return { number, playerOne, playerTwo };
    case 3:
      return { number, playerOne, playerTwo, playerThree };
    case 4:
      return { number, playerOne, playerTwo, playerThree, playerFour };
    default:
      throw new Error('Dispatch players num invalid');
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return init(action.payload);
    case 'movePlayer':
      return {
        // TODO merge move state
        ...state,
        // [action.payload.player]: { position: [action.payload.position] },
        [action.payload.player]: [action.payload.position],
      };
    default:
      throw new Error('Context reducer error');
  }
};

export const ContextAppWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    {
      number: null,
    },
    // init,
  );

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
