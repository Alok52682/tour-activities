import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons'
import Place from '../Place/Place';
import Sideber from '../Self-component/Sideber';
import Questions from '../Queations/Questions';

const Main = () => {
    const [places, setPlaces] = useState([]);
    const [totalTime, setTotalTime] = useState(0);

    useEffect(() => {
        fetch('TouristSpots.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])


    const pickStayTime = (time) => {
        setTotalTime(totalTime + time)
    }

    return (
        <div className='flex flex-col-reverse sm:grid grid-cols-3 lg:grid-cols-4'>
            <div className='w-11/12 mx-auto mt-10 sm:col-span-2 lg:col-span-3'>
                <h1 className='text-green-500 text-4xl font-bold'> <FontAwesomeIcon icon={faRoute} /> Tour Activities</h1>
                <h2 className='text-xl font-semibold my-5'>Select Destination</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                    {
                        places.map(place => <Place click={pickStayTime} key={place.id} place={place} />)
                    }
                </div>
                {/* #FAQ unite added */}
                <Questions></Questions>
            </div>
            <div className='bg-slate-200'>
                {/* Sideber component added */}
                <Sideber time={totalTime} />
            </div>
        </div>
    );
};

export default Main;