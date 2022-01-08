import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux';

import ProfileButton from "./ProfileButton"
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
        <li className="nav-bar-right">
            <NavLink to="/login">Log In</NavLink>
        </li>
        <li className="nav-bar-right">
            <NavLink to="/signup">Sign Up</NavLink>
        </li>
        </>
        );
    }
    return (
        <nav>
            <div className="nav-left">
                <NavLink exact to="/">Home</NavLink>
            </div>
            <ul className="nav-right">
                {isLoaded && sessionLinks}
            </ul>

        </nav>
      );
}

export default Navigation
