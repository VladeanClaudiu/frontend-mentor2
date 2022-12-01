import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className ="container">
      <h1>SPLI<br />TTER</h1>
      <div className="main-app">
        <div className="main-tip">
          <p className="headings">Bill</p>
          <input name="bill" className="bill-input" type="number" placeholder="0" />
        </div>

        <div className="main-select-tip">
          <p className="headings">Select Tip %</p>
          <ul className="tip-selections">
            <li>
              <input type="radio" id='5p' name="percent"/>
              <label htmlFor="5p">5%</label>
            </li>
            <li>
              <input type="radio" id='10p' name="percent"/>
              <label htmlFor="10p">10%</label>
            </li>
            <li>
              <input type="radio" id='15p' name="percent"/>
              <label htmlFor="15p">15%</label>
            </li>
            <li>
              <input type="radio" id='25p' name="percent"/>
              <label htmlFor="25p">25%</label>
            </li>
            <li>
              <input type="radio" id='50p' name="percent"/>
              <label htmlFor="50p">50%</label>
            </li>
            <li>
              <input
              name="custom-tip"
              className="bill-input"
              type="number"
              placeholder="Custom"
            />
            </li>
            
          </ul>
        </div>
        <div className="main-number-people">
          <p className="headings">Number of People</p>
          <input
            name="people"
            className="people-input"
            type="number"
            placeholder="0"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
