import React from 'react';

const AddtoDb = (time) => {
    localStorage.setItem('Break Time', JSON.stringify(time))
};

const getTime = () => {
    const time = localStorage.getItem('Break Time');
    const parsedTime = JSON.parse(time);
    return parsedTime;
}


export {
    AddtoDb,
    getTime
}