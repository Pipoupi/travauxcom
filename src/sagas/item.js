import { put, call } from 'redux-saga/effects';
import { API, FAIL, GET, SUCCESS, PENDING, ITEM, COMMENT } from '../utils/constant';

export function* getItemFromUrl(action) {
  try {
    yield put({ type: ITEM + GET + PENDING, loading: true });
    const { id } = action;
    const url = `${API}/item/${id}.json`;
    const response = yield call(fetch, url);
    const data = yield call([response, response.json]);
    yield put({ type: ITEM + GET + SUCCESS, itemContent: data });
  } catch (err) {
    yield put({ type: ITEM + GET + FAIL, message: err.message });
  }
}

export function* getCommentsFromItem(action) {
  try {
    yield put({ type: ITEM + COMMENT + GET + PENDING, loading: true });
    const { content } = action;
    const { kids } = action;
    // debugger;
    //the idea here is to get all comments, stock them with parent id (no nested object as it seems more complicated) and then client side map them with content.kids first and do map again for each parent
    for (let i = 0; i < kids.length; i += 1) {}
    // const url = `${API}/item/${id}.json`;
    // const response = yield call(fetch, url);
    // const data = yield call([response, response.json]);
    // yield put({ type: ITEM + COMMENT + GET + SUCCESS, itemContent: data });
  } catch (err) {
    yield put({ type: ITEM + COMMENT + GET + FAIL, message: err.message });
  }
}
