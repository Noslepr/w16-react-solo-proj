import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { postPhoto } from '../../store/photos';

import './PostPhoto.css'


const PostPhoto = ({ sessionUser, setShowModal }) => {
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
        <form className="form-container" id="post-form">
            <h2 id='post-header'>Fill out photo details:</h2>
            <label>Photo URL:</label>
            <input
                className='formField'
                type="text"
                required
                onChange={(e) => setPhotoUrl(e.target.value)}
                value={photoUrl}
            />
            <label>Description:</label>
            <input
                className='formField'
                type="text"
                placeholder='optional'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button
                className='button'
                type='button'
                onClick={(e) => {
                    setShowModal(false);
                    handleSubmit(e)
                }}
            >Post Photo</button>
            <button className='button cancel' onClick={() => setShowModal(false)}>Cancel</button>
        </form>
    )

}


export default PostPhoto
