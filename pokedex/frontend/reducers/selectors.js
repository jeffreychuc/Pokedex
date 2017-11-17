import React from 'react';
import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

export const selectPokemon = (state) => {
  // debugger;
  // return values(state.entities.pokemon);
  return Object.keys(state.entities.pokemon).map(key => (
    `${key}: ${state.entities.pokemon[key]}`
  ));
};

export const selectPokemonItems = (state) => {

  return values(state.entities.items);
};

export const selectPokemonItem2 = (state, itemId) => {
  return values(state.entities.items[itemId]);
};