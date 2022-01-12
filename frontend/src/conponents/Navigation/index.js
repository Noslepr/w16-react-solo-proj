import React from 'react';
import { NavLink, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../store/session'
import ProfileButton from "./ProfileButton"
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import logo from '../../images/logo.png'
import './Navigation.css';

const Navigation = ({ isLoaded, sessionUser }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const demoLogin = async (e) => {
        const res = await dispatch(login({ credential:'Demo-lition', password:'password' }))

        if (res.ok) {
            history.push('/')
        }
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
                <button className='login-btn' onClick={demoLogin}>Demo Login</button>
            </>
        );
    }
    return (
        <nav>
            <div className="nav-left">
                <NavLink exact to="/">
                    <img className='logo'src={logo}></img>
                    Rock Flickr
                </NavLink>
            </div>
            <ul className="nav-right">
                {sessionUser && (
                    <NavLink to='/post-photo'>
                        <button className='white-btn'>Upload Photo</button>
                    </NavLink>
                )}
                {isLoaded && sessionLinks}
            </ul>

        </nav>
      );
}

export default Navigation
