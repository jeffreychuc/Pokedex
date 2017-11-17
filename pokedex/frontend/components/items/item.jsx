import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <li>
      <Link to ={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
        <img src={item.image_url} />
      </Link>
    </li>
  );
};

export default Item;

//display pictures and links to each picture to then show their item detail 