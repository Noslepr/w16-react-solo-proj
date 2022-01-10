import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPhotos } from '../../store/photos'


const Explore = () => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos)
    console.log(photos[1])

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    return (
        <>
            <div>hello from explore page</div>
            <img src={`${photos[1].photoUrl}`}></img>
        </>
    )
}


export default Explore
