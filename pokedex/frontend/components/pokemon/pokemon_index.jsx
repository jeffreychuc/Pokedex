import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { HashRouter, Route, Switch } from 'react-router-dom';

class PokemonIndex extends React.Component {
  
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {

    return (
      <div className="bil;lshit">
        <ul>
          {
            this.props.pokemon.map((singlePokemon) => (
              <PokemonIndexItem key={singlePokemon.id} onePokemon = {singlePokemon} />
            ))
          }
        </ul>
        <Route path="/pokemon/:pokemonid" component ={PokemonDetailContainer} />
      </div>
    );
  }
}


export default PokemonIndex;