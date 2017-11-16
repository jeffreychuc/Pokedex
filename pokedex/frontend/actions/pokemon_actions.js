import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon: pokemon
});

export const receivePokemon = ( promiseObject ) => {
  return ({type: RECEIVE_POKEMON,
  pokemon: promiseObject.pokemon,
  items: promiseObject.items});
};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then((pokemon) => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPokemon = (id) => (dispatch) => {
  console.log("pokemon Action", id);
  return APIUtil.fetchPokemon(id)
    .then((promiseObject) => dispatch(receivePokemon(promiseObject)));
};
