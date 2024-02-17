import React from 'react';
import Heading from './Heading';
import Identity from './Identity';

function Props(props) {
    console.log(props);
    return (
        <>
            <Heading  name = {props.name}/>
            <Identity text = {props.text} />
        </>
    );
}

export default Props;