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
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userId = sessionUser.id

        const photo = { userId, photoUrl, description }
        // const data = await dispatch(postPhoto(photo))
        setErrors([]);

        const data = await dispatch(postPhoto(photo))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
            console.log('data:', data)
        if(data) {
            history.push(`/photo/${data.id}`)
            setShowModal(false)
        }
    }

    return (
        <form className="form-container" id="post-form">
            <h2 id='post-header'>Fill out photo details:</h2>
            <ul>
                {errors.map((error, idx) => <li className='errors'key={idx}>{error}</li>)}
            </ul>
            <label>Photo URL:</label>
            <input
                className='formField wide-form'
                type="text"
                required
                onChange={(e) => setPhotoUrl(e.target.value)}
                value={photoUrl}
            />
            <label>Description:</label>
            <textarea
                className='formField textarea'
                type="text"
                rows={5}
                placeholder='optional'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button
                className='button'
                type='button'
                onClick={(e) => {
                    // setShowModal(false);
                    handleSubmit(e)
                }}
            >Post Photo</button>
            <button className='button cancel' onClick={() => setShowModal(false)}>Cancel</button>
        </form>
    )

}


export default PostPhoto
