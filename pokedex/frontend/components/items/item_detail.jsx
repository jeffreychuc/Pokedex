import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) =>  {
  return <li> item.name </li>;
};

export default ItemDetail;



// { items.map(item => <li key={item.id}> <Link to= {'/pokemon/' + pokemon.id + '/item/' + item.id}>{item.name}</Link></li>) }
