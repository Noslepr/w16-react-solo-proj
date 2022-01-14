import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormPage/SignupForm';
import LoginForm from '../LoginFormModal/LoginForm';
import './Splash.css'


const Splash = () => {
    const [signupModal, setSignupModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    return (
        <div id='splash-background'>
            <h1 className='splash-text'>Climb your inspiration.</h1>
            <h2 className='splash-text'>Join the Rock Flickr community and explore <br>
            </br>...tens of Rock Climbing photos</h2>
            <button id='splash-signup' onClick={() => setSignupModal(true)}>Start for free</button>
                {signupModal && (
                    <Modal onClose={() => setSignupModal(false)}>
                        <SignupForm
                            setLoginModal={setLoginModal}
                            setSignupModal={setSignupModal}
                        />
                    </Modal>
                )}
                {loginModal && (
                    <Modal onClose={() => setLoginModal(false)}>
                        <LoginForm
                            setLoginModal={setLoginModal}
                            setSignupModal={setSignupModal}
                        />
                    </Modal>
                )}
        </div>
    )
}

export default Splash
