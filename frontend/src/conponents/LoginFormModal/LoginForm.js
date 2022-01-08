import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch} from 'react-redux'

import { login } from '../../store/session'
import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([])
        const res = await dispatch(login({ credential, password }))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {
                console.log('in error block')
                setErrors(data.errors);
            }
        });

        if (res.ok) {
            history.push('/')
        }
    }

    return (
        <form className='loginForm' onSubmit={handleSubmit}>
            <div className='loginHeader'>Log in to Flicker</div>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <input
                className='formField'
                type='text'
                placeholder='Username or Email'
                required
                onChange={(e) => setCredential(e.target.value)}
                value={ credential }
            />
            <input
                className='formField'
                type='password'
                paceholder='password'
                required
                onChange={(e) => setPassword(e.target.value)}
                value={ password }
            />
            <button className='button'type='submit'>Submit</button>
        </form>
    )
}

export default LoginForm
