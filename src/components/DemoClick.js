import React from 'react';
import { useState } from 'react';


// function changeMind(){

// }


function DemoClick(props) {
    const [isGoingOut, SetGoingOut] = useState(true);
    const answer = isGoingOut ? "Yes" : "No";
    function changeMind() {
        SetGoingOut(prevState => !prevState)
    }
    return (
        <div>
            <h1>Click here to check yes no</h1>
            <button onClick={changeMind}>{answer}</button>
        </div>
    );
}

export default DemoClick;