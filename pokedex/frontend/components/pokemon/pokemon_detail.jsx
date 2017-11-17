import React from 'react';
import ItemDetailContainer from '../items/items_detail_container';
import ItemDetail from '../items/item_detail';
import { Route } from 'react-router-dom';
import Item from '../items/item';

class PokemonDetail extends React.Component {


  componentDidMount() {
    // console.log(this.props, 'mounting');
    this.props.requestPokemon(this.props.match.params.pokemonid);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonid !== newProps.match.params.pokemonid)  {
      this.props.requestPokemon(newProps.match.params.pokemonid);
    }
  }

  render () {
    // console.log(this.props.pokemon, 'pokemon');
    // console.log(this.props.items, 'items');
    const { items } = this.props;

    return (
      <div>
        <ul>
          IT WORKS
          { 
            items.map((item,idx) => <Item key={idx} item={item} /> ) 
          }
        </ul>
        <Route path="/pokemon/:pokemonid/item/:itemid" component ={ItemDetailContainer} />
  
      </div>
    );
  }
}

export default PokemonDetail;


