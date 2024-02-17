import React, { useState } from "react";

const Search = ()=>{
    const [img,setImg] = useState('');
    
    const search = (e)=>{
        setImg(e.target.value);
    }

    console.log(img);
    const source = `https://source.unsplash.com/500x600/?${img}`;

    return (
        <>
        <input type="text" onChange={search} value={img} />
        {img !== "" && <img src={source} alt="Photo"/>}
        
        </>
    )
};

export default Search;