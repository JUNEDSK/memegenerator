import React from 'react';

function PropHeader(props) {
    return (
        <div>
            <div className='headerProps'>
                <h3>Current User : {props.isUser}</h3>
            </div>
        </div>
    );
}

export default PropHeader;