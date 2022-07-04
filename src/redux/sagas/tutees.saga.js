import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTutees() {
  console.log("in fetchTutees");
  try {
    const response = yield axios.get("/api/tutees");
    console.log('response.data--------------------->',response.data)
    yield put({ type: "SET_TUTEES", payload: response.data });
  } catch (error) {
    alert("no in fetchTutees");
    console.log("fetch tutees error", error);
  }
}

function* postNewStudent(action) {
  //this function adds a new tutee to the tutee table, along with entry for them in
  //language table

  let emailToSend = "";
  if (action.payload.studentOrGuardian === "Student") {
    emailToSend = action.payload.emailStudent;
  } else {
    emailToSend = action.payload.emailGuardian;
  }
  console.log("emailToSend:", emailToSend);

  try {
    const response = yield axios.post("/api/tutees", action.payload);
    yield put({ type: "UNSET_ADD_NEW_SUBJECTS_INFO" });
    yield put({ type: "UNSET_ADD_NEW_STUDENT_SUBJECTS" });
    yield put({ type: "UNSET_ADD_NEW_STUDENT_ADDITIONAL" });
    yield put({ type: "ADD_STUDENT_TERMS", payload: false });
    // try {
    //   const response2 = yield axios.post("/api/mail", {
    //     email: emailToSend,
    //   });
    // } catch (err) {
    //   //alert("no in postNewStudent email");
    //   console.log("error posting new student email:", err);
    // }
  } catch (err) {
    alert("no postNewStudent");
    console.log("error posting new student:", err);
  }
}

function* updateStudentSubjects(action) {
  console.log('action.payload in updateTutees---------->',action.payload)
    try {
      const response = yield axios({
        method: 'PUT',
        url: `/api/tutees/update/${action.payload.user_id}`,
        data: action.payload
      })
      // yield put({type:"ADD_NEW_TUTOR_SUBJECTS"})
    } catch {
      console.log('ERROR in UPDATE TUTEES SUBJECTS');
    }
  }
  function* fetchSelectedSessions() {
    console.log('in fetch SELECTED/SESSIONS')
    try {
      const response = yield axios.get("/api/sessions/selected");
      console.log('response from SELECTED/SESSIONS',response.data)
      yield put({ type: "SET_SELECTED_SESSIONS", payload: response.data });
    } catch (error) {
      console.log("SELECTED SESSIONS ERROR", error);
  
    }
  }

  function* fetchStudentSubjects() {
    console.log('in fetch Student Subjects')
    try {
      const response = yield axios.get("/api/tutees/subjects");
      console.log('response from Student subjects',response.data)
      yield put({ type: "SET_STUDENT_SUBJECTS", payload: response.data });
    } catch (error) {
      console.log("STUDENT SUBJECTS ERROR", error);
  
    }
  }



function* tuteesSaga() {
  yield takeLatest("FETCH_TUTEES", fetchTutees);
  yield takeLatest("ADD_NEW_STUDENT", postNewStudent);
  yield takeLatest("UPDATE_STUDENT_SUBJECTS", updateStudentSubjects);
  yield takeLatest("FETCH_SELECTED_SESSIONS", fetchSelectedSessions);
  yield takeLatest("FETCH_STUDENT_SUBJECTS", fetchStudentSubjects)

}

export default tuteesSaga;
