import React from 'react';

const Place = (props) => {
    // Distructuring props
    const { bannerImg, about, place, stay } = props.place;
    return (
        // Place card from daisy UI
        <div className="card card-compact bg-slate-200 shadow-xl">
            <figure><img src={bannerImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{place}</h2>
                <p>{about}</p>
                <p className='font-bold'>Stay : {stay} hour</p>
                <div className="card-actions justify-end">
                    {/* set time to Total travel time by click handler */}
                    <button onClick={() => props.click(stay)} className="btn bg-green-500 border-0 w-full">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Place;