import React from 'react';
import { useState } from 'react';

function DemoItem(props) {


    const [things, setThings] = useState(["thing 1", "thing 2"]);
    
    function additem(){
        const newthingText = `thing ${things.length + 1}`
        setThings(prevState => [...prevState, newthingText])
    }

    const thingselements = things.map(thing => <p key={thing}>{thing}</p>)

    return (
      <>
        <div>
            <button onClick={additem} >Add Item</button>
        </div>
        <div>
            {thingselements}
        </div>
      </>
    );
}

export default DemoItem;