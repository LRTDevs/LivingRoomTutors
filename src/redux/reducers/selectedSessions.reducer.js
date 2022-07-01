const selectedSessions = (state = [], action) => {
    switch (action.type) {
      case  "SET_SELECTED_SESSIONS":
        return action.payload;
      case "UNSET_SELECTED_SESSIONS":
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default selectedSessions;