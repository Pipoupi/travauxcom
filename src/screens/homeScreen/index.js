import { connect } from 'react-redux';
import Home from '../../components/home';
import {getHome, getHomeWithoutSaga} from "./action";

function mapStateToProps(state) {
    console.log(state);
    return {
        home: state.home
    }
}

const mapDispatchToProps = {
   getHome,
   getHomeWithoutSaga
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);