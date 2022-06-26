import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postProfileInfo(action) {
  try {
    const response = yield axios.post('api/profile', action.payload);
    yield put({
      type: 'FETCH_PROFILE_INFO',
    });
  } catch (error) {
    console.log('Error in postProfileInfo:', error);
  }
}

function* postProfileInfoSaga() {
  yield takeLatest('ADD_PROFILE_INFO', postProfileInfo);
}

export default postProfileInfoSaga;
