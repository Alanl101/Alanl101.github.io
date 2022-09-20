import React from 'react';
import './App.css';
import Popup from './components/Popup';
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  
  //List of Dealerships and check mark tracker
  const [checked, setChecked] = useState([]);
  const checkList = ["Dealership 1", "Dealership 2"];

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

    
  var isChecked = (item) =>
  checked.includes(item) ? "checked-item" : "not-checked-item";



  return (
    <div className='App'>
      <main>
      <h1>React Popup</h1>
      <div className='checkList'>
        <div className='title'>Dealerships</div>
        <div className='list-container'>
          {checkList.map((item,index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                <span className={isChecked(item)}>{item}</span>
              </div>
          ))}
        </div>
      </div>
      <div>
        {`Items checked are: ${checkedItems}`}
      </div>

        
      <button onClick={() => setButtonPopup(true)}>Open Popup</button>
      

      </main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My Popup</h3>
        <div>
        {`Items checked are: ${checkedItems}`}
        </div>
      </Popup>
    </div>


  );
}

export default App;
