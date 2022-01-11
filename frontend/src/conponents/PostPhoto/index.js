import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom'

import { postPhoto } from '../../store/photos';


const PostPhoto = ({ sessionUser }) => {
    const dispatch = useDispatch();
    const history = useHistory()

    const [photoUrl, setPhotoUrl] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userId = sessionUser.id

        const photo = { userId, photoUrl, description }
        const data = await dispatch(postPhoto(photo))

        if(data) {
            history.push(`/photo/${data.id}`)
        }
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
