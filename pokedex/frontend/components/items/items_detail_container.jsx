import { connect } from 'react-redux';
import { selectPokemon, selectPokemonItems2 } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) =>  {
  console.log('ownProps', ownProps); //i can read the params coming from the link i was triggered from.
  const itemId = ownProps.match.params.itemId;
  return {
    item: selectPokemonItems2(state, itemId)
  };

};

const mapDispatchToProps = (dispatch)  =>  ({
  // requestItem: (id) => (dispatch(requestItem(id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);


