import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';

import { login } from '../../store/session'
import { Modal } from '../../context/Modal';
import ProfileButton from "./ProfileButton"
import LoginFormModal from '../LoginFormModal';
import LoginForm from '../LoginFormModal/LoginForm';
import SignupFormModal from '../SignupFormPage';
import SignupForm from '../SignupFormPage/SignupForm';
import PostPhoto from '../PostPhoto';
import logo from '../../images/logo.png'
import './Navigation.css';

const Navigation = ({ isLoaded, sessionUser }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    const [showModal, setShowModal] = useState(false)

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
                <button className='login-btn' onClick={() => setLoginModal(true)}>Log In</button>
                {loginModal && (
                    <Modal onClose={() => setLoginModal(false)}>
                        <LoginForm
                            setLoginModal={setLoginModal}
                            setSignupModal={setSignupModal}
                        />
                    </Modal>
                )}
                <button className='white-btn' onClick={() => setSignupModal(true)}>Sign Up</button>
                {signupModal && (
                    <Modal onClose={() => setSignupModal(false)}>
                        <SignupForm
                            setLoginModal={setLoginModal}
                            setSignupModal={setSignupModal}
                        />
                    </Modal>
                )}
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
                    <button className='white-btn upload' onClick={() => setShowModal(true)}>Upload Photo</button>
                )}
                {isLoaded && sessionLinks}
            </ul>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostPhoto sessionUser={sessionUser} setShowModal={setShowModal}/>
                </Modal>
            )}

        </nav>
      );
}

export default Navigation
