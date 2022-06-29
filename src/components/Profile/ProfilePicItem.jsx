import * as React from 'react';
import { useSelector } from "react-redux";
;

function ProfilePicItem() {
    const profilePic = useSelector((store) => store.profilePicReducer);
    return (
        (profilePic.length === 0 ?
            <img src='https://res.cloudinary.com/living-room-tutors/image/upload/v1656532496/DEV/zgvnpxvejdm39mibvhfj.jpg' width='100' />
            : <img src={profilePic[0].image_url} width='100' />)

    );
}

export default ProfilePicItem;
