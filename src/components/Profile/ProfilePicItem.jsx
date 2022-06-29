import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
;

function ProfilePicItem() {
    const profilePic = useSelector((store) => store.profilePicReducer[0]);

    return (
        <img src={profilePic.image_url} width='100' />
    );
}

export default ProfilePicItem;
