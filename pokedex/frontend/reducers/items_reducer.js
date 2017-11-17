import merge from 'lodash/merge';
import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemReducer = ( state = {}, action) =>  {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_POKEMON:
      newState = merge({}, action.items);

      return newState;
    default:
      return state;
  }
};

export default itemReducer;