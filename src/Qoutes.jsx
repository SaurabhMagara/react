import React, { useEffect, useState } from "react";

const Qoutes = () => {

    const [req, setReq] = useState({
        name: "",
        house: "",
        qoute: ""
    });

    const data = async () => {
        try {
            const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }

    }

    const getFacts = async () => {

        const detail = await data();

        const cname = await detail.character.name;
        const hname = await detail.character.house.name;
        const qt = await detail.sentence;

        setReq(() => {
            return ({
                name: cname,
                house: hname,
                qoute: qt
            })
        })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="text-center">
                    <div className="text-center bg-dark bg-gradient pb-4">
                        <h1 className="fw-bolder text-info">Game Of Thrones</h1>
                        <p className="text font-monospace text-light">Click below button and get qoute from Game of Thrones.</p>
                        <button className="btn btn-outline-light" onClick={getFacts}>Get Quote</button>
                    </div>
                    {req === `{name: "",house: "",qoute: ""}` ? null :
                        <div className="text-center mt-5 d-flex align-items-center justify-content-center">
                            <div className="text-center p-4 rounded-3 shadow bg-light bg-gradient">
                                <h5 className="fw-bold text-capitalize ">{req.name} </h5>
                                <h5 >{req.house} </h5>
                                <p className="text-center  fs-5">{req.qoute}</p>
                            </div>
                        </div>

                    }


                </div>
            </div>
        </>
    )
};

export default Qoutes;