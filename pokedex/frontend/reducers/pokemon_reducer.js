import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action)  =>  {
  Object.freeze(state);
  let newState;
  switch (action.type)  {
    case RECEIVE_ALL_POKEMON:
      newState = merge({}, action.pokemon);
      return newState;
    case RECEIVE_POKEMON:
      let currentPokemonID = action.pokemon.id;
      debugger;
      newState = merge({}, state, {[currentPokemonID]: action.pokemon});
      // newState = merge({}, action.pokemon);
      debugger;
      return newState;
    default:
      return state;  
  }
};



export default pokemonReducer;
