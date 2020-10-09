import { put, call } from 'redux-saga/effects';
import { slice } from 'lodash';
import { API, FAIL, GET, HOME, SUCCESS, PENDING } from '../utils/constant';

export function* getTopStoriesId(action) {
  try {
    yield put({ type: HOME + GET + PENDING, loading: true });
    let url;
    if (!action.url) {
      url = `${API}/topstories.json`;
    } else if (action.url === 'newest') {
      url = `${API}/newstories.json`;
    } else if (action.url === 'ask') {
      url = `${API}/askstories.json`;
    } else if (action.url === 'show') {
      url = `${API}/showstories.json`;
    }
    const response = yield call(fetch, url);
    const data = yield call([response, response.json]);
    const reducedData = slice(data, 0, 2);
    const stories = [];
    for (let i = 0; i < reducedData.length; i += 1) {
      const urlId = `${API}/item/${reducedData[i]}.json`;
      const responseId = yield call(fetch, urlId);
      const dataId = yield call([responseId, response.json]);
      stories.push(dataId);
    }
    yield put({ type: HOME + GET + SUCCESS, data: { ids: data, stories } });
  } catch (err) {
    yield put({ type: HOME + GET + FAIL, message: err.message });
  }
}
