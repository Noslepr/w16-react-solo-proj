import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory } from "react-router-dom"

import { Modal } from "../../context/Modal"
import { destroyPhoto } from "../../store/photos"
import EditPhotoForm from "../EditPhoto"
import './PhotoDetails.css'

const PhotoDetails = ({ sessionUser }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();

    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const photo = useSelector(state => state.photos.photos[photoId])
    const photoOwner = photo.userId
    const isOwner = photoOwner === sessionUser.id

    const deletePhoto = () => {
        const photo = { id:photoId }

        dispatch(destroyPhoto(photo))

        history.push('/')
    }

    return (
        <>
            <div id='description'>{photo.description}</div>
            {isOwner && (
                <div id='edit-delete-container'>
                    <button
                        id='edit'
                        className="button"
                        onClick={() => setShowModal(true)}
                    >Edit</button>
                    <button
                        id='delete'
                        className="button"
                        onClick={() => setShowDeleteModal(true)}
                    >Delete</button>
                </div>
            )}
            <img className='details-img'src={photo.photoUrl} />
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                <EditPhotoForm photoId={photoId} setShowModal={setShowModal}/>
                </Modal>
            )}
            {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                    <div id='delete-container'>
                        <h2 id='delete-header'>Delete Photo?</h2>
                        <div id='delete-text'>
                            Are you sure you want to delete this photo?
                            Photo can not be retrieved after deletion.
                        </div>
                        <div id='delete-btn-container'>
                            <button
                                className="button"
                                id='cancel-delete'
                                onClick={() => setShowDeleteModal(false)}
                            >Cancel</button>
                            <button
                                className="button"
                                id='confirm-delete'
                                onClick={deletePhoto}
                            >Confirm Deletion</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}


export default PhotoDetails
