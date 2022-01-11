import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPhotos } from '../../store/photos'


const Explore = ({ sessionUser}) => {
    const photos = useSelector(state => state.photos)

    if (sessionUser) {
        return (
            <>
                {Object.keys(photos).map(key => (
                    <Link to={`/photo/${key}`}>
                        <img key={key} src={photos[key].photoUrl}></img>
                    </Link>
                ))}
            </>
        )
    } else {
        return (null)
    }
}


export default Explore
