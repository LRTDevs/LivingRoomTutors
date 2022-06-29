import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTutors() {
  console.log("in fetchTutors");
  try {
    const response = yield axios.get("/api/tutors");
    yield put({ type: "SET_TUTORS", payload: response.data });
  } catch (error) {
    alert("no in fetchTutors");
    console.log("fetch tutors error", error);
  }
}

function* postNewTutor(action) {
  //this function adds a new tutor to the tutor table, along with entries for them in
  //language, subject_tutor, and mentoring_grade
  try {
    const response = yield axios.post("/api/tutors", action.payload);
    yield put({ type: "UNSET_ADD_NEW_TUTOR_INFO" });
    yield put({ type: "UNSET_ADD_NEW_TUTOR_SUBJECTS" });
    yield put({ type: "UNSET_ADD_TUTOR_ADITIONAL_INFO" });
    yield put({ type: "ADD_TUTOR_TERMS", payload: false });
    try {
      const response2 = yield axios.post("/api/mail", {
        email: action.payload.email,
      });
    } catch (err) {
      //alert("no in postNewTutor email");
      console.log("error posting new tutor email:", err);
    }
  } catch (err) {
    alert("no in postNewTutor");
    console.log("error posting new tutor:", err);
  }
}

function* updateTutorSubjects(action) {
  console.log('action.payload in updateTutor---------->',action.payload)
    try {
      const response = yield axios({
        method: 'PUT',
        url: `/api/tutors/update/${action.payload.user_id}`,
        data: action.payload
      })
      // yield put({type:"ADD_NEW_TUTOR_SUBJECTS"})
    } catch {
      console.log('ERROR in UPDATE TUTOR INFO');
    }
  }

  function* createTutorSessions(action) {
    console.log('TUTOR SESSION DATES---------->',action.payload)
      try {
        const response = yield axios({
          method: 'POST',
          url: '/api/sessions',
          data: action.payload
        })
        // yield put({type:"ADD_NEW_TUTOR_SUBJECTS"})
      } catch {
        console.log('ERROR in POST/TUTOR SESSIONS');
      }
    }





function* tutorsSaga() {
  yield takeLatest("FETCH_TUTORS", fetchTutors);
  yield takeLatest("SEND_NEW_TUTOR", postNewTutor);
  yield takeLatest( "UPDATE_TUTOR_SUBJECTS", updateTutorSubjects);
  yield takeLatest( "ADD_TUTOR_SESSIONS", createTutorSessions)
 
}

export default tutorsSaga;
