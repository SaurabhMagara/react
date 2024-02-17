import React, { useState } from 'react';
import './index.css'

const Ex = () => {

    const [names, setNames] = useState({
        fname: "",
        lname: "",
        email: "",
        number: ""
    });

    const Update = (e) => {
        const { value, name } = e.target;

        setNames((prev) => {

            return{
                ...prev,
                [name]:value
            }

            // if (name === 'fname') {
            //     return {
            //         fname: value,
            //         lname: prev.lname,
            //         email: prev.email
            //     }
            // } else if (name === 'lname') {
            //     return {
            //         fname: prev.fname,
            //         lname: value,
            //         email: prev.email
            //     }
            // } else if (name === "email") {
            //     return {
            //         fname: prev.fname,
            //         lname: prev.lname,
            //         email: value
            //     }
            // }
        });
    };

    const clicked = (e) => {
        e.preventDefault();
        alert("Submited");
    };

    return (
        <>
            <form onSubmit={clicked}>
                <h2 className="heading">Hello, {names.fname} {names.lname}</h2>
                <p className="para">{names.email}</p>
                <p className="para">{names.number}</p>

                <input type="text"
                    name='fname'
                    value={names.fname}
                    className="input"
                    onChange={Update} />
                <input
                    type="text"
                    name='lname'
                    value={names.lname}
                    className="input"
                    onChange={Update} />
                <input type="email"
                    name='email'
                    value={names.email}
                    className="input"
                    onChange={Update} />
                <input type="number"
                    name='number'
                    value={names.number}
                    className="input"
                    onChange={Update} />
                <button type="submit" className="btn">Submit</button>
            </form>
        </>
    )
};

export default Ex;