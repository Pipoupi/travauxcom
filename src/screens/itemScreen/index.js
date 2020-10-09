import { connect } from 'react-redux';
import Item from '../../components/item';
import { getItemFromUrl, feedState, getCommentsFromItem } from './action';

function mapStateToProps(state) {
  return {
    item: state.item,
    content: state.item.content,
    loading: state.item.loading,
    error: state.item.error,
  };
}

const mapDispatchToProps = {
  getItemFromUrl,
  feedState,
  getCommentsFromItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
