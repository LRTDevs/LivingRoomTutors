const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return action.payload;
    default:
      return state;
  }
};

export default profileReducer;

// KANGAROO! changed default state to an empty object 👆