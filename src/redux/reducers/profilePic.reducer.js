const profilePicReducer = (state = [], action) => {
    console.log('====>',action.payload)
    switch (action.type) {
      case 'SET_PROFILE_PIC':
        return action.payload;
      default:
        return state;
    }
  };

  export default profilePicReducer;