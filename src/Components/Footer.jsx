import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import "./footer.css"
function Footer() {
    return (
        <div className='footer d-flex justify-content-between m-auto mt-5'>
            <div className='mb-2 d-flex align-items-center'>
                <FontAwesomeIcon icon={faLocationDot} />
                <h4>Kolkata, West Bengal</h4>
            </div>
            <div className='mb-2 d-flex align-items-center'>
                <FontAwesomeIcon icon={faEnvelope} />
                <h4>tonimeshapril9@gmail.com</h4>
            </div>
            <div className='mb-2 d-flex align-items-center'>
                <FontAwesomeIcon icon={faPhone} />
                <h4>+91 6294999458</h4>
            </div>
        </div>
    )
}

export default Footer