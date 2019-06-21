import React from 'react';
import '../styles/box.css';

function BlackBox({id,url,iWasClicked}) {
    return (
 
    <div className="box col" onClick={iWasClicked}>
        <img src={url} id={id} alt="id"/>
    </div>

    
    )
}

export default BlackBox;
