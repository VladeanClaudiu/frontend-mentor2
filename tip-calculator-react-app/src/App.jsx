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
          <div className="tip-selections">
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <input
              name="custom-tip"
              className="bill-input"
              type="number"
              placeholder="Custom"
            />
          </div>
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
