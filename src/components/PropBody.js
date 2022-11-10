import React from 'react';

function PropBody(props) {
    return (
        <div>
            <div className='bodyProps'>
                <h3>Welcome back : {props.isUser}!</h3>
            </div>
        </div>
    );
}

export default PropBody;