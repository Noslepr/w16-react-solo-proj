import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPhotos } from '../../store/photos'


const Explore = ({ sessionUser}) => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos)

    // useEffect(() => {
    //     dispatch(getPhotos())
    // }, [dispatch])

    if (sessionUser) {
        return (
            <>
                {Object.keys(photos).map(key => (
                    <img key={key} src={photos[key].photoUrl}></img>
                ))}
            </>
        )
    } else {
        return (null)
    }
}


export default Explore
