import { csrfFetch } from './csrf'

const GET_PHOTOS = 'photos/GET_PHOTOS'
const POST_PHOTO = 'photos/POST_PHOTO'

const get = (photos) => {
    return {
        type: GET_PHOTOS,
        photos
    }
}

const post = (photo) => {
    return {
        type: POST_PHOTO,
        photo
    }
}

export const getPhotos = () => async dispatch => {
    const res = await csrfFetch('/api/photos', {
        method: 'GET'
    })

    const data = await res.json();
    dispatch(get(data.photos))
}

export const postPhoto = (photo) => async dispatch => {
    const { userId, photoUrl, description } = photo;
    const res = await csrfFetch('/api/photos', {
        method: 'POST',
        body: JSON.stringify({ userId, photoUrl, description })
    })

    const data = await res.json();
    console.log(data)
    dispatch(post(data.photo))
}

const initialState = { photos: null }
const photoReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_PHOTOS:
            action.photos.forEach(photo => {
                newState[photo.id] = photo;
            })
            newState = {...newState, ...state.photos};
            return newState;
        case POST_PHOTO:
            console.log(action.photo)
            newState = {...state, [action.photo.id]: action.photo };
            return newState;
        default:
            return state;
    }
}

export default photoReducer
