import { connect } from 'react-redux';
import User from '../../components/user';
import { getUserFromId } from './action';

function mapStateToProps(state) {
  return {
    user: state.user.user,
    loading: state.user.loading,
    error: state.user.error,
  };
}

const mapDispatchToProps = {
  getUserFromId,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
