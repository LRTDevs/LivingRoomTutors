const selectedMatch = (state = [], action) => {
    switch (action.type) {
      case "SET_SELECTED_MATCHES":
        return action.payload;
      case "UNSET_SELECTED_MATCHES":
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default selectedMatch;