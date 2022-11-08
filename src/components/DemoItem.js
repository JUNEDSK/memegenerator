import React from 'react';
import { useState } from 'react';

function DemoItem(props) {

  const [isThingsArry, setThingsArry] = useState(["thing1", "thing1"]);


  function additem() {
    setThingsArry(prevState => {
      return [...prevState, `thing ${prevState.length + 1}`]
    })
  }

  const thingselements = isThingsArry.map(thing => <p key={thing}>{thing}</p>)

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