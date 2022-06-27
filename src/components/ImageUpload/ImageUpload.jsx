import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ImageUpload() {


    useEffect(() => {
        dispatch({
            type: 'FETCH_PROFILE_PIC',
        });
    }, []);

    const dispatch = useDispatch();

    const myProfilePic = useSelector(store => store.profilePicReducer);
    console.log('profilePic ===>', myProfilePic);



    return (
        <div>
            <p>Image Upload</p>
            <img src={myProfilePic[0].image_url} width='100' />
        </div>
    )
};

export default ImageUpload;