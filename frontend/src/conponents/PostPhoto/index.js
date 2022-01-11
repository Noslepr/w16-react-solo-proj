import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { postPhoto } from '../../store/photos';


const PostPhoto = ({ sessionUser }) => {
    const dispatch = useDispatch();
    const history = useHistory()

    const [photoUrl, setPhotoUrl] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userId = sessionUser.id

        // let res
        // let data
        const photo = { userId, photoUrl, description }
        const data = await dispatch(postPhoto(photo))
        // .catch(async (res) => {
        //     data = res.json()
        //     console.log('inside catch data:', data)
        // })
        // const data = await res.json()
        // console.log('res:', res)
        console.log('data:', data)

        // console.log('in handleSubmit data:', data)

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
