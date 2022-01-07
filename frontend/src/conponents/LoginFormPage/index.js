import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../store/session'

const LoginFormPage = () => {
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')

    const sessionUser = useSelector((state) => state.user)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = { credential, password }
        dispatch(login(payload))
            .catch(async (res) => {
                const data = await res.json()
                console.log(data.errors)
            })

            
        history.push('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Username or Email'
                required
                onChange={(e) => setCredential(e.target.value)}
                value={ credential }
            />
            <input
                type='text'
                paceholder='password'
                required
                onChange={(e) => setPassword(e.target.value)}
                value={ password }
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default LoginFormPage
