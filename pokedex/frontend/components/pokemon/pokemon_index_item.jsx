import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({onePokemon}) =>  {
  return <li>  <Link to ={'/pokemon/' + onePokemon.id}> <img src={onePokemon.image_url} height='50px' alt={onePokemon.name}/></Link> {onePokemon.name} </li>;
};

export default PokemonIndexItem;


//