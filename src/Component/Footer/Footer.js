import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='h-14 bg-gray-400 sm:sticky bottom-0 text-center'>
            <small className='font-bold'>copyright <FontAwesomeIcon icon={faCopyright} /> 2029 </small>
        </div>
    );
};

export default Footer;