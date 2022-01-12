import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';

import { login } from '../../store/session'
import { Modal } from '../../context/Modal';
import ProfileButton from "./ProfileButton"
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import PostPhoto from '../PostPhoto';
import logo from '../../images/logo.png'
import './Navigation.css';

const Navigation = ({ isLoaded, sessionUser }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [showModal, setShowModal] = useState(false);

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
