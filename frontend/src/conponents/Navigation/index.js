import React from 'react';
import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux';

import ProfileButton from "./ProfileButton"
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import logo from '../../images/logo.png'
import './Navigation.css';

const Navigation = (isLoaded) => {
    const sessionUser = useSelector(state => state.session.user);

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
            </>
        );
    }
    return (
        <nav>
            <div className="nav-left">
                {/* <img id='logo'src={logo}></img> */}
                <NavLink exact to="/">
                    <img id='logo'src={logo}></img>
                    Rock Flickr
                </NavLink>
            </div>
            <ul className="nav-right">
                {isLoaded && sessionLinks}
            </ul>

        </nav>
      );
}

export default Navigation
