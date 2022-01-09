import { Redirect, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { signup } from '../../store/session'
import './SignupForm.css';

const SignupForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector((state) => state.session.user);

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(signup({ email, username, password }))
              .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
              });
          }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    }
    return (
        <form className='signupForm'onSubmit={handleSubmit}>
          <div>
            Signup for Rock Flickr
          </div>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
            <input
              className='formField'
              type="text"
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <input
              className='formField'
              type="text"
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <input
              className='formField'
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className='formField'
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          <button className='button' type="submit">Sign Up</button>
        </form>
    )
}


export default SignupForm
