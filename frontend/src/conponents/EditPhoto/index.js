import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';

import { updatePhoto } from "../../store/photos"
import './EditPhoto.css'

const EditPhotoForm = ({ photoId, setShowModal }) => {
    const dispatch = useDispatch()
    const photo = useSelector(state => state.photos.photos[photoId])

    const [photoUrl, setPhotoUrl] = useState(photo.photoUrl)
    const [description, setDescription] = useState(photo.description)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const photo = { id: photoId, photoUrl, description };
        dispatch(updatePhoto(photo))

        setShowModal(false)

    }
    return (
        <form className="form-container" id='edit-form' onSubmit={handleSubmit}>
            <h2 id='edit-header'>Change your photo here:</h2>
            <label>New photo URL:</label>
            <input
                className='formField wide-form'
                id='edit-field'
                type="text"
                required
                onChange={(e) => setPhotoUrl(e.target.value)}
                value={photoUrl}
            />
            <label>Description:</label>
            <textarea
                className='formField textarea'
                id='edit-field'
                type="text"
                rows={5}
                placeholder='optional'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button className='button' type='submit' >Commit Change</button>
            <button className='button cancel' onClick={() => setShowModal(false)}>Cancel</button>
        </form>
    )
}


export default EditPhotoForm
