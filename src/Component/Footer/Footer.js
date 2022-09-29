import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='h-14 bg-gray-400 sticky bottom-0'>
            <small className='absolute bottom-2/4 left-2/4 font-bold'>copyright <FontAwesomeIcon icon={faCopyright} /> 2029 </small>
        </div>
    );
};

export default Footer;