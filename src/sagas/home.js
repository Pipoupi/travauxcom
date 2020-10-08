import { put } from 'redux-saga/effects';
import {FAIL, GET, HOME, SUCCESS} from "../utils/constant";

export function* getHome() {
    try {
        yield put({type: HOME+GET+SUCCESS});
    } catch(err) {
        yield put({type: HOME+GET+FAIL, message: err.message})
    }
}