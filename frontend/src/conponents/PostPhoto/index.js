import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { postPhoto } from '../../store/photos';


const PostPhoto = ({ sessionUser }) => {
    const dispatch = useDispatch();

    const [photoUrl, setPhotoUrl] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const userId = sessionUser.id

        const photo = { userId, photoUrl, description }
        dispatch(postPhoto(photo))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Photo URL
                <input
                    type="text"
                    required
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    value={photoUrl}
                />
            </label>
            <label>Description
                <input
                    type="text"
                    placeholder='optional'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
            </label>
            <button type='submit'>Post Photo</button>
        </form>
    )

}


export default PostPhoto
