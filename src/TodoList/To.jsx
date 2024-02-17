import React, { useState } from "react";
import ToLists from "./ToLists";
import './To.css';

const To = () => {

    const [list, setList] = useState("");
    const [item, setItem] = useState([]);

    const ipEvent = (e) => {
        setList(e.target.value);
    };

    const update = () => {
        setItem((oldItem) => {
            return [...oldItem, list];
        });
        setList("");
    };

    const Delete = (id) => {
        setItem((oldItem) => {
            return oldItem.filter((ele, index) => {
                return index !== id;
            });
        });
    };

    return (
        <>
            <div className="main-box">
                <div className="inner-box">
                    <h1 className="titles">ToDo List</h1>

                    <div className="line">
                        <input type="text"
                            className="ip"
                            onChange={ipEvent}
                            value={list} />
                        <button className="add-btn" onClick={update}>Add</button>
                    </div>

                    <div className="list-box">
                        {
                            item.map((val, index) => {
                                return <ToLists text={val} key={index} id={index} onSelect={Delete} />
                            })
                        }
                    </div>

                </div>
            </div>

        </>
    );
};

export default To;