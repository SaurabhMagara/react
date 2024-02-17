import React, { useState } from "react";

const AgeCalc = () => {

    const [val, setval] = useState('');
    const [result, setResult] = useState('')

    const change = (e) =>{
        setval(e.target.value);
    }

    const Check = ()=>{
        let res = calculate();
        setResult(res);
        
    }

    const calculate = ()=>{
        let birthdate = new Date(val);
        let date = new Date();

        let adate = date.getDate()-birthdate.getDate();
        let amonth = date.getMonth()-birthdate.getMonth();
        let ayear = date.getFullYear()-birthdate.getFullYear();
        

        if(adate <0){
            amonth--;
            adate += new Date(date.getFullYear(),
            date.getMonth(),
            0).getDate();
        }

        if(amonth <0){
            ayear--;
            amonth += 12;
        }

        return `Your are ${ayear} years, ${amonth} months, ${adate} days old.`

    }

    return (
        <>
        <h1 className="titles">Age Calc</h1>
        <input type="date" className="inp"  onChange={change}/>
        <button className="eq-btn" onClick={Check}> Check</button>
        <p className="para">{result}</p>
        </>
    )
};

export default AgeCalc;