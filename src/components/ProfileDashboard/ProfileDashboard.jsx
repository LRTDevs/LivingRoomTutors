import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { useHistory } from 'react-router-dom';


// function ProfileDashboard() {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const user = useSelector(store => store.userReducer);
//   console.log("user====>",user)

//   const handleClick = () => {
//     console.log('clicked', user.id);
//     history.push(`/ImageUpload/${user.id}`)
// }

//   return(
//     <div>
//       <Header />
//       <button onClick={handleClick}>Profile</button>
//     </div>
    
//   )
// }

export default ProfileDashboard;
