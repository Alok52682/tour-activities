import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { AddtoDb, getTime } from '../Utilities/FakeDb';
import ActivityComplete from './ActivityComplete';

const Sideber = (props) => {
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        // set breaktime getting clicked time from local storage
        const time = getTime();
        setBreakTime(time);
    }, [breakTime])

    // add time to break time unit by click handler
    const addBreak = (value) => {
        AddtoDb(value)
        setBreakTime(getTime());
    }
    return (
        <div className='sticky top-10 w-11/12 mx-auto'>
            <div className='flex gap-3 bg-white p-3 rounded-lg my-10'>
                <img src="https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1636100249202-5NY98C6ASRIFFPO9GZTU/Tom+Professional+Business+Headshot.jpg?format=500w" className='h-12 w-12 rounded-full' alt="" />
                <div>
                    <h2>Mr.Alex</h2>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Toronto,Canada</p>
                </div>
            </div>
            <div className='flex justify-between bg-white p-3 rounded-lg gap-2 mb-10'>
                <div>
                    <h1 className='text-4xl sm:text-2xl md:text-4xl font-bold text-slate-600'>59<span className='text-lg sm:text-sm md:text-lg font-semibold text-slate-400'>kg</span></h1>
                    <h2 className='text-xl'>Weight</h2>
                </div>
                <div>
                    <h1 className='text-4xl sm:text-2xl md:text-4xl font-bold text-slate-600'>6.6</h1>
                    <h2 className='text-xl'>Height</h2>
                </div>
                <div>
                    <h1 className='text-4xl sm:text-2xl md:text-4xl font-bold text-slate-600'>22<span className='text-lg sm:text-sm md:text-lg font-semibold text-slate-400'>yrs</span></h1>
                    <h2 className='text-xl'>Age</h2>
                </div>
            </div>
            <div>
                <h1 className='text-xl mb-5 font-semibold'>Add A Break</h1>
                <div className='flex justify-around w-full bg-white p-3 rounded-lg'>
                    <button onClick={() => addBreak(3)} className="focus:bg-green-500 h-10 w-10 text-xl bg-slate-400 text-white p-2 rounded-lg">3h</button>
                    <button onClick={() => addBreak(4)} className="focus:bg-green-500 h-10 w-10 text-xl bg-slate-400 text-white p-2 rounded-lg">4h</button>
                    <button onClick={() => addBreak(5)} className="focus:bg-green-500 h-10 w-10 text-xl bg-slate-400 text-white p-2 rounded-lg">5h</button>
                    <button onClick={() => addBreak(6)} className="focus:bg-green-500 h-10 w-10 text-xl bg-slate-400 text-white p-2 rounded-lg">6h</button>
                    <button onClick={() => addBreak(7)} className="focus:bg-green-500 h-10 w-10 text-xl bg-slate-400 text-white p-2 rounded-lg">7h</button>
                </div>
                <div>
                    <h1 className='text-2xl my-5 font-semibold'>Travel Detail</h1>
                    <div className='bg-white p-3 rounded-lg text-xl text-slate-500 mb-5'>
                        <h1>Total Travel Time : {props.time} Hour</h1>
                    </div>
                    <div className='bg-white p-3 rounded-lg text-xl text-slate-500 mb-10'>
                        <h1>Break Time : {breakTime ? breakTime : 0} Hour</h1>
                    </div>
                </div>
                {/* Button toaster Component added */}
                <ActivityComplete />
            </div>
        </div>
    );
};

export default Sideber;