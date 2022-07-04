const matchProfile = (state = [], action) => {
    switch (action.type) {
      case "SET_MATCH_PROFILE":
        return action.payload;
      case "UNSET_PROFILE":
        return {};
      default:
        return state;
    }
  };

  export default matchProfile;
