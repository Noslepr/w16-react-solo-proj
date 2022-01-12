import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import './PhotoDetails.css'

const PhotoDetails = () => {
    const { photoId } = useParams();
    const photo = useSelector(state => state.photos.photos[photoId])

    return (
        <>
            <div id='description'>{photo.description}</div>
            <img className='details-img'src={photo.photoUrl} />
        </>
    )
}


export default PhotoDetails
