import React from 'react';

const Place = (props) => {
    const { bannerImg, about, place, stay } = props.place;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={bannerImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{place}</h2>
                <p>{about}</p>
                <p className='font-bold'>Stay : {stay} hour</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-500 border-0 w-full">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Place;