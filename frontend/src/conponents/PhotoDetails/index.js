import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const PhotoDetails = () => {
    const { photoId } = useParams();
    const photo = useSelector(state => state.photos[photoId])
    console.log('photoId:', photoId)

    return (
        <div>welcome to photo details</div>
    )
}


export default PhotoDetails
