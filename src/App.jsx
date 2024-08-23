import { useState } from 'react'
import './App.css'
import { Button, Operator, Screen } from './components'

function App() {
  const numbers = [1,2,3,4,5,6,7,8,9,0];
  const [curValue, setCurValue] = useState(0);
  
  const handleCalculate = (event) => {
    console.log("curValue", curValue);
    console.log("event", event.target.value)
    setCurValue[event.target.value];
    
  }

  return (
    <div>
      <Screen content={curValue}/>

      {/* <div className="container">
        < />
        <Operator />
      </div> */}
      <div className='gridNum'>
        {
          numbers.map((item)=> (
            <Button value={item} onButtonClick={handleCalculate} key={item} buttonName={item} />
          ))
        }
      </div>
    </div>
  )
}

export default App
