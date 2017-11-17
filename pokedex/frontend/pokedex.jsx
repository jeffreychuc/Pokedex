import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, fetchAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';


window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;

import Root from './components/root';

import { selectAllPokemon } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', ()=>  {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, rootEl);

  
});
