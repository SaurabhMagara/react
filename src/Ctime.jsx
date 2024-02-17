import React, { useState } from 'react';

const Ctime = (name) => {

    const [date, setDate] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setDate(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <>
            <h1 className='heading'>{date}</h1>
            <h1 className="heading">{name}</h1>
        </>

    )
};

export default Ctime;