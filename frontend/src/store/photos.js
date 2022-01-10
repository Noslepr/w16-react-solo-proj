import { csrfFetch } from './csrf'

const GET_PHOTOS = 'photos/GET_PHOTOS'

const get = (photos) => {
    return {
        type: GET_PHOTOS,
        photos
    }
}

export const getPhotos = () => async dispatch => {
    const res = await csrfFetch('/api/photos', {
        method: 'GET'
    })

    const data = await res.json();
    dispatch(get(data.photos))
}


const initialState = { photos: null }
const photoReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_PHOTOS:
            action.photos.forEach(photo => {
                newState[photo.id] = photo
            })
            newState = {...newState, ...state.photos}
            return newState
        default:
            return state
    }
}

export default photoReducer
