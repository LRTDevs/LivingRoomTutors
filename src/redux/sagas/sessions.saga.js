import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* updateConfirmSessions(action) {
    console.log('action.payload is confirmed', action.payload)
      try {
        const response = yield axios({
          method: 'PUT',
          url: `/api/sessions/confirm/${action.payload}`
        })
        yield put({type:"FETCH_SELECTED_SESSIONS"})
      } catch {
        console.log('ERROR in UPDATE ISBOOKED');
      }
    }

    function* updateRejectedSessions(action) {
        console.log('action.payload isrejected', action.payload)

        

        try {
          const response = yield axios({
            method: 'PUT',
            url: `/api/sessions/rejected/${action.payload}`
          })
          yield put({type:"FETCH_SELECTED_SESSIONS"})
        } catch {
          console.log('ERROR in UPDATE ISREJECTED');
        }
      }








function* sessionsSaga() {
    yield takeLatest("UPDATE_ISBOOKED",updateConfirmSessions );
    yield takeLatest("UPDATE_ISREJECTED",updateRejectedSessions);

  }

  export default sessionsSaga;
