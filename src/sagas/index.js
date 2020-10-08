import { takeLatest } from 'redux-saga/effects';
import {GET, HOME} from "../utils/constant";
import { getHome} from "./home";

function* mySaga() {
    yield takeLatest(HOME + GET, getHome)
}

export default mySaga;