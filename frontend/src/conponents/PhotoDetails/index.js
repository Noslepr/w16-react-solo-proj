import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import './PhotoDetails.css'

const PhotoDetails = ({ sessionUser }) => {
    const { photoId } = useParams();
    const photo = useSelector(state => state.photos[photoId])
    const photoOwner = photo.userId
    const isOwner = photoOwner === sessionUser.id
    console.log(isOwner)

    return (
        <>
            {isOwner && (
                <div id='edit-delete-container'>
                    <button
                        id='edit'
                        className="button"
                        // onClick={}
                        
                        >Edit</button>
                    <button id='delete'className="button">Delete</button>
                </div>
            )}
            <div id='description'>{photo.description}</div>
            <img className='details-img'src={photo.photoUrl} />

        </>
    )
}


export default PhotoDetails
