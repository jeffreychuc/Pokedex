import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectPokemon, selectPokemonItems } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state) =>  ({
  pokemon: selectPokemon(state),
  items: selectPokemonItems(state)
});

const mapDispatchToProps = (dispatch)  =>  ({
  requestPokemon: (id) => (dispatch(requestPokemon(id)))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
