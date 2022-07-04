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


function* fetchMatchProfile(action) {
  console.log('in fetch match profile', action.payload)
  try {
    const response = yield axios.get(`/api/profile/match/${action.payload}`);
    console.log('response from match profile',response.data)
    yield put({ type: "SET_MATCH_PROFILE", payload: response.data });
  } catch (error) {
    console.log("Match Profile ERROR", error);

  }
}








function* matchesSaga() {
  yield takeLatest("FETCH_MATCHES", fetchMatches);
  yield takeLatest("FETCH_SELECTED_MATCH", fetchSelectedMatches);
  yield takeLatest("FETCH_SELECTED_PROFILE",fetchMatchProfile)
}

export default matchesSaga;

