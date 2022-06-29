import * as React from 'react';
import { useSelector } from "react-redux";
;

function ProfilePicItem() {
    const profilePic = useSelector((store) => store.profilePicReducer[0].image_url);

    return (
        <img src={profilePic} width='100' />
    );
}

export default ProfilePicItem;
