import React from "react";
import './To.css';

const ToLists = (props) => {
    return (
        <>
            <div className="line">
                <button className="del-btn" onClick={() => {
                    props.onSelect(props.id);
                }}>X</button>
                <p className="list">{props.text}</p>
            </div>


        </>
    )
};

export default ToLists;