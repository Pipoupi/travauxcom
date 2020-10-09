import { connect } from 'react-redux';
import Home from '../../components/home';
import { getHome } from './action';

function mapStateToProps(state) {
  return {
    home: state.home,
    stories: state.home.stories,
    loading: state.home.loading,
    error: state.home.error,
  };
}

const mapDispatchToProps = {
  getHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
