import React from 'react';

class PokemonDetail extends React.Component {


  componentDidMount() {
    // console.log(this.props, 'mounting');
    this.props.requestPokemon(this.props.match.params.pokemonid);
  }

  componentWillReceiveProps(newProps) {
    console.log('newProps', newProps);
    if (this.props.match.params.pokemonid !== newProps.match.params.pokemonid)  {
      this.props.requestPokemon(newProps.match.params.pokemonid);
    }
  }

  render () {
    // console.log(this.props.pokemon, 'pokemon');
    // console.log(this.props.items, 'items');
    const { pokemon, items } = this.props;
    return (
      <ul>
        IT WORKS
        { pokemon.map(item => 
            <li>{item}</li>) 
        }
        { items.map(item => <li>{item.name}</li>) }
      </ul>
    );
  }
}

export default PokemonDetail;