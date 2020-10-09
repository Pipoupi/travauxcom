import { put, call } from 'redux-saga/effects';
import { API, FAIL, GET, SUCCESS, PENDING, USER } from '../utils/constant';

export function* getUserFromId(action) {
  try {
    yield put({ type: USER + GET + PENDING, loading: true });
    const { userId } = action;
    const url = `${API}/user/${userId}.json`;
    const response = yield call(fetch, url);
    const data = yield call([response, response.json]);
    yield put({ type: USER + GET + SUCCESS, userResult: data });
  } catch (err) {
    yield put({ type: USER + GET + FAIL, message: err.message });
  }
}
