import React, { useState } from "react";

const Meter = ()=>{

    const [result, setResult] = useState(0);

    const inc = ()=>{
        setResult(result+1);
        console.log(result+" result");
    };

    const dec = ()=>{
        if(result===0){
            alert("Limit is reached to zero");
        }else{
            setResult(result-1);
        }
    };
    return (
        <>
        <h1 className="titles">{result}</h1>
        <button onClick={inc}>Increament</button>
        <button onClick={dec}>Decreament</button>
        </>
    )
};

export default Meter;