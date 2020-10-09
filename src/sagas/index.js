import { takeLatest } from 'redux-saga/effects';
import { COMMENT, GET, HOME, ITEM, USER } from '../utils/constant';
import { getTopStoriesId } from './home';
import { getUserFromId } from './user';
import { getItemFromUrl, getCommentsFromItem } from './item';

function* mySaga() {
  yield takeLatest(HOME + GET, getTopStoriesId);
  yield takeLatest(USER + GET, getUserFromId);
  yield takeLatest(ITEM + GET, getItemFromUrl);
  yield takeLatest(ITEM + COMMENT + GET, getCommentsFromItem);
}

export default mySaga;
