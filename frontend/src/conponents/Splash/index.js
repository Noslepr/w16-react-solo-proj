import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
// import SignupFormModal from '../SignupFormPage'
import SignupForm from '../SignupFormPage/SignupForm';
import './Splash.css'


const Splash = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div id='splash-background'>
            <h1 className='splash-text'>Find your inspiration.</h1>
            <h2 className='splash-text'>Join the Rock Flickr community and explore <br>
            </br>...tens of Rock Climbing photos</h2>
            <button id='splash-signup' onClick={() => setShowModal(true)}>Start for free</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <SignupForm />
                    </Modal>
                )}
        </div>
    )
}

export default Splash
