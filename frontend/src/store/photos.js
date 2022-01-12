import { csrfFetch } from './csrf'

const GET_PHOTOS = 'photos/GET_PHOTOS'
const POST_PHOTO = 'photos/POST_PHOTO'
const UPDATE_PHOTO = 'photos/UPDATE_PHOTO'
const DESTROY_PHOTO = 'photos/DESTROY_PHOTO'

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

const update = (photo) => {
    return {
        type: UPDATE_PHOTO,
        photo
    }
}

const destroy = (photo) => {
    return {
        type: DESTROY_PHOTO,
        photo
    }
}

export const getPhotos = () => async dispatch => {
    const res = await csrfFetch('/api/photos', {
        method: 'GET'
    })

    const data = await res.json();
    dispatch(get(data.photos))

    return res
}

export const postPhoto = (photo) => async dispatch => {
    const { userId, photoUrl, description } = photo;
    const res = await csrfFetch('/api/photos', {
        method: 'POST',
        body: JSON.stringify({ userId, photoUrl, description })
    })

    const data = await res.json();
    dispatch(post(data.photo))
    return data.photo
}

export const updatePhoto = (photo) => async dispatch => {
    const { id, photoUrl, description } = photo;
    const res = await csrfFetch('/api/photos', {
        method: 'PATCH',
        body: JSON.stringify({ id, photoUrl, description })
    })

    const data = await res.json();
    dispatch(update(data.photo))
    return data.photo
}

export const destroyPhoto = (photo) => async dispatch => {
    const { id } = photo
    const res = await csrfFetch('/api/photos', {
        method: 'DELETE',
        body: JSON.stringify({ id })
    })

    const data = await res.json();
    dispatch(destroy(data.photo))
}

const initialState = { photos: null }
const photoReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_PHOTOS:
            newState = {...state}
            newState.photos = action.photos.reduce((a, b) => {
                return { ...a, [b.id]: b }
            }, {})
            return newState;
        case POST_PHOTO:
            newState.photos = {...state.photos, [action.photo.id]: action.photo };
            return newState;
        case UPDATE_PHOTO:
            newState.photos = {...state.photos,[action.photo.id]: action.photo }
            return newState;
        case DESTROY_PHOTO:
            newState.photos = {...state.photos}
            delete newState.photos[action.photo.id]
            return newState
        default:
            return state;
    }
}

export default photoReducer
