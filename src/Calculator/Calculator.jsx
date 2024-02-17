import React, { useState } from "react";
import './calc.css';

const Calculator = () => {

    const [ip, setIp] = useState('');

    const update = (e) => {
        setIp(ip + e.target.innerText);
    }

    const Result = () => {
        try {
            setIp(eval(ip).toString());
        } catch (err) {
            console.log(err);
            alert("Invalid Input!!!")
            setIp('');
        }
    }

    const Clear = () => {
        setIp('');
    }

    const Delete = () => {
        setIp(ip.slice(0, -1));
    }

    const change = (e) => {
        setIp(e.target.value);
    }

    return (
        <>
            <div className="main-div">
                <div className="inner-div">
                    <input type="text" className="inp" value={ip} onChange={change} />
                    <div className="btn-box">
                        <div className="btn-row">
                            <button className="num-btn" onClick={update}>7</button>
                            <button className="num-btn" onClick={update} >8</button>
                            <button className="num-btn" onClick={update}>9</button>
                            <button className="op-btn" onClick={update} >/</button>
                        </div>
                        <div className="btn-row">
                            <button className="num-btn" onClick={update} >4</button>
                            <button className="num-btn" onClick={update}>5</button>
                            <button className="num-btn" onClick={update}>6</button>
                            <button className="op-btn" onClick={update} >*</button>
                        </div>
                        <div className="btn-row">
                            <button className="num-btn" onClick={update}>3</button>
                            <button className="num-btn" onClick={update} >2</button>
                            <button className="num-btn" onClick={update} >1</button>
                            <button className="op-btn" onClick={update}>-</button>
                        </div>
                        <div className="btn-row">
                            <button className="num-btn" onClick={update} >.</button>
                            <button className="num-btn" onClick={update} >0</button>
                            <button className="num-btn eq-btn" onClick={Result} >=</button>
                            <button className="op-btn" onClick={update}>+</button>
                        </div>
                        <div className="row-s">
                            <button className="clr-btn ac-btn" onClick={Clear}>AC</button>
                            <button className="clr-btn del" onClick={Delete}>DEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Calculator;