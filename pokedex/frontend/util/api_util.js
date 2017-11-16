export const fetchAllPokemon = ()  => {
 return $.ajax({
    type: 'GET',
    url: '/api/pokemon'
  });
};

export const fetchPokemon = (id) => {
  console.log("api fetchPokemon id", id);
  return $.ajax({
    type: 'GET',
    url: `api/pokemon/${id}`
  });
};
