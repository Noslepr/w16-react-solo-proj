import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPhotos } from '../../store/photos'
import "./Explore.css"


const Explore = ({ sessionUser }) => {
    const photos = useSelector(state => state.photos)

    const next = () => {
        const active = document.querySelector('.top-display')
        const prevBtn = document.querySelector('.prev')
        const nextBtn = document.querySelector('.next')
        
        active.classList.remove('top-display')
        active.nextSibling.classList.add('top-display')
        prevBtn.style.display = 'block'

        if (!active.nextSibling.nextSibling) {
            nextBtn.style.display = 'none'
        }
    }

    const prev = () => {
        const active = document.querySelector('.top-display')
        const prevBtn = document.querySelector('.prev')
        const nextBtn = document.querySelector('.next')

        active.classList.remove('top-display')
        active.previousSibling.classList.add('top-display')
        nextBtn.style.display = 'block'

        if (!active.previousSibling.previousSibling) {
            prevBtn.style.display = 'none'
        }
    }

    if (sessionUser) {
        return (
            <>
                <button className='carousel-btn prev' onClick={prev}><i className="fas fa-chevron-left"></i></button>
                <button className='carousel-btn next' onClick={next}><i className="fas fa-chevron-right"></i></button>
                <ul id='carousel-container'>
                    <li className='img-backing top-display'>
                        <img className='carousel-img' src={photos[18].photoUrl}></img>
                    </li>
                    {Object.keys(photos).map(key => (
                        <li  key={key * 10}className='img-backing'>
                            <Link to={`/photo/${key}`}>
                                <img className='carousel-img' key={key} src={photos[key].photoUrl}></img>
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    } else {
        return (null)
    }
}


export default Explore
