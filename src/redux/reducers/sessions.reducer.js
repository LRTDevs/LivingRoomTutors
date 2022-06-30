const sessionsReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_TUTOR_SESSIONS":
        return action.payload;
      case "UNSET_TUTORS_SESSIONS":
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default sessionsReducer;