import { useState } from "react"
import { useDispatch } from 'react-redux';

import { updatePhoto } from "../../store/photos"
import './EditPhoto.css'

const EditPhotoForm = ({ photoId, setShowModal }) => {
    const dispatch = useDispatch()
    const [photoUrl, setPhotoUrl] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const photo = { id: photoId, photoUrl, description };
        dispatch(updatePhoto(photo))

        setShowModal(false)

    }
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div id='edit-header'>Change your photo here:</div>
            <label>New photo URL:</label>
            <input
                className='formField'
                id='edit-field'
                type="text"
                required
                onChange={(e) => setPhotoUrl(e.target.value)}
                value={photoUrl}
            />
            <label>Description:</label>
            <input
                className='formField'
                id='edit-field'
                type="text"
                placeholder='optional'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button className='button' type='submit' >Commit Change</button>
        </form>
    )
}


export default EditPhotoForm
