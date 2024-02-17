import React, { useEffect, useState } from "react";


const DynamicTitle = ()=>{
    const [num, setNum] = useState(0);

    useEffect(()=>{
        document.title = `You clicked me ${num} times!`;
    })

    return (
        <>
        <button className="btn btn-danger m-5" onClick={()=>setNum(num+1)}>Click Me! {num}</button>
        </>
    )

};

export default DynamicTitle;