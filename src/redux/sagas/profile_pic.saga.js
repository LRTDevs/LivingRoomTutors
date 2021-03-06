import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// function* fetchProfilePic() {
//     try {
//       const shelf = yield axios.get('/api/upload');
//       yield put({
//         type: 'SET_IMAGES',
//         payload: shelf.data,
//       });
//     } catch {
//       console.log('GET shelf error');
//     }
//   }

function* fetchProfilePic(action) {
  console.log('in fetchProfilePic=======')
  const id = action.payload;
  const response = yield axios({
    method: 'GET',
    url: `/api/upload/${Number(id)}`
  })
  // PUT things in redux: "SET_DISCS"
  yield put({
    type: 'SET_PROFILE_PIC',
    payload: response.data
  })
};

  function* fetchProfilePicSaga() {
    yield takeLatest('FETCH_PROFILE_PIC', fetchProfilePic);
  }
  
  export default fetchProfilePicSaga;