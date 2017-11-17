import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { HashRouter, Route, Switch } from 'react-router-dom';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component ={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);

export default Root;


//<Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />

//we defined what pokemonid is. 
//if we change this, we will have to change the pokemon_detail params as well.

{/* <Route path="/pokemon/:pokemonid" component ={PokemonDetailContainer} /> */}