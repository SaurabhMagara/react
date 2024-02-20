import React, { useState } from "react";

const Search = ()=>{
    const [img,setImg] = useState('');
    
    const search = (e)=>{
        setImg(e.target.value);
    }

    console.log(img);
    const source = `https://source.unsplash.com/400x450/?${img}`;

    return (
        <>
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1>Dynamic Photo fetcher</h1>
        <input type="text" onChange={search} value={img}  className="center rounded-2 fs-2 shadow m-3" placeholder="Enter name"/>
        {img !== "" && <img src={source} alt="Photo"/>}
        </div>
        
        </>
    )
};

export default Search;