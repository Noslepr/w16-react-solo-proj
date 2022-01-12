import { useState } from "react"

import './EditPhoto.css'

const EditPhotoForm = () => {
    const [photoUrl, setPhotoUrl] = useState('')
    const [description, setDescription] = useState('')
    return (
        <form className="form-container">
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
            <button className='button' type='submit'>Commit Change</button>
        </form>
    )
}


export default EditPhotoForm
