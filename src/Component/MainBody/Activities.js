import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons'
import Place from '../Place/Place';
import SelfCompo from '../Self-component/SelfCompo';

const Activities = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('TouristSpots.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div className='flex flex-col-reverse md:grid grid-cols-4 gap-5'>
            <div className='w-11/12 mx-auto mt-10 col-span-3'>
                <h1 className='text-green-500 text-4xl font-bold'> <FontAwesomeIcon icon={faRoute} /> Tour Activities</h1>
                <h2 className='text-xl font-semibold my-5'>Select Destination</h2>
                <div className='grid md:grid-cols-3 gap-5 mb-10'>
                    {
                        places.map(place => <Place key={place.id} place={place} />)
                    }
                </div>
            </div>
            <div className='bg-slate-200'>
                <SelfCompo></SelfCompo>
            </div>
        </div>
    );
};

export default Activities;