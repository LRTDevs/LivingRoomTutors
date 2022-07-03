import { combineReducers } from "redux";


const tuteesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TUTEES":
      return action.payload;
    case "UNSET_TUTEES":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user

const tuteesSubject = (state = [], action) => {
  switch (action.type) {
    case "SET_STUDENT_SUBJECTS":
      return action.payload;
    case "UNSET_TUTEES_SET_STUDENT_SUBJECTS":
      return {};
    default:
      return state;
  }
};
export default  combineReducers({tuteesReducer,tuteesSubject});
