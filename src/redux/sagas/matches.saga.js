import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchMatches() {
  console.log('in fetchMatches')
  try {
    const response = yield axios.get("/api/matches");
    yield put({ type: "SET_MATCHES", payload: response.data });
  } catch (error) {
    function* fetchMatches() {
      alert("no in fetchMatches");
      console.log("fetch matches error", error);
    }
  }
}


function* fetchSelectedMatches() {
  console.log('in fetchMatches')
  try {
    const response = yield axios.get("/api/matches/selected");
    console.log('response from SELECTED/MATCH',response.data)
    yield put({ type: "SET_SELECTED_MATCHES", payload: response.data });
  } catch (error) {
    console.log("SELECTED MATCH ERROR", error);

  }
}










function* matchesSaga() {
  yield takeLatest("FETCH_MATCHES", fetchMatches);
  yield takeLatest("FETCH_SELECTED_MATCH", fetchSelectedMatches);

}

export default matchesSaga;

