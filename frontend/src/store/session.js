import { csrfFetch } from './csrf'

const SET_USER = 'user/SET_USER'
const REMOVE_USER = 'user/REMOVE_USER'

const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const login = (user) => async dispatch => {
    const { credential, password } = user
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({ credential, password})
    })

    if (response.ok) {
        const user = await response.json()
        dispatch(setUser(user))
    }
}



const initialState = { user: null}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {user: action.user}
        case REMOVE_USER:
            return {user: null}
        default:
            return state
    }
}

export default sessionReducer
