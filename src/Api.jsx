import React, { useEffect, useState } from 'react';

function Api() {

  const [dist, setDist] = useState({});

    useEffect(()=>{
        getData();
    },[]);

    const getData = async ()=>{
        const data =  await fetch("https://data.covid19india.org/v4/min/data.min.json");
        const res =  await data.json();
        console.log(res.GJ.districts);

        setDist(res.State);
    }
  return (
    <div>{}</div>
  )
}

export default Api;