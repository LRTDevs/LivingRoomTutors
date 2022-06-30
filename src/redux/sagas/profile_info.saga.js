import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchProfileInfo() {
  try {
    const response = yield axios.get('api/profile');
    yield put({
      type: 'SET_PROFILE',
      payload: response.data[0], // KANGAROO! 👈 changed this to send just the object (rather than an array with an object in it)
    });
  } catch (error) {
    console.log('Error in fetchProfileInfo:', error);
  }
}

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

function* profileInfoSaga() {
  yield takeLatest('FETCH_PROFILE_INFO', fetchProfileInfo);
  yield takeLatest('ADD_PROFILE_INFO', postProfileInfo);
}

export default profileInfoSaga;
