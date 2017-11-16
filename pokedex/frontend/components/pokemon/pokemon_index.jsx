import React from 'react';

class PokemonIndex extends React.Component {
  
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    return (
      <div>
        <ol>
          {
            this.props.pokemon.map(singlePokemon => (
              <li>
                <img height="40" src={singlePokemon.image_url} />
                {singlePokemon.name}

              </li>
            ))
          }
        </ol>
      </div>
    );
  }
}


export default PokemonIndex;