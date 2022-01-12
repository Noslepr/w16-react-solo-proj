import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { Modal } from "../../context/Modal"
import EditPhotoForm from "../EditPhoto"
import './PhotoDetails.css'

const PhotoDetails = ({ sessionUser }) => {
    const { photoId } = useParams();

    const [showModal, setShowModal] = useState(false);

    const photo = useSelector(state => state.photos.photos[photoId])
    const photoOwner = photo.userId
    const isOwner = photoOwner === sessionUser.id

    return (
        <>
            {isOwner && (
                <div id='edit-delete-container'>
                    <button
                        id='edit'
                        className="button"
                        onClick={() => setShowModal(true)}
                        >Edit</button>
                    <button id='delete'className="button">Delete</button>
                </div>
            )}
            <img className='details-img'src={photo.photoUrl} />
            <div id='description'>{photo.description}</div>
            {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPhotoForm photoId={photoId} setShowModal={setShowModal}/>
        </Modal>
      )}
        </>
    )
}


export default PhotoDetails
