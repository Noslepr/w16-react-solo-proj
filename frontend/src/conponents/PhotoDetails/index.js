import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const PhotoDetails = () => {
    const { photoId } = useParams();
    const photo = useSelector(state => state.photos[photoId])

    return (
        <>
            <div>{photo.description}</div>
            <img src={photo.photoUrl} />
        </>
    )
}


export default PhotoDetails
