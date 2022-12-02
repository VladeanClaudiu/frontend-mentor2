import { useEffect, useState } from 'react'


function App() {
  const [bill, setBill] = useState("")
  const [numberOfPeople, setNumberOfPeople] = useState("")
  const [customPercent, setCustomPercent] = useState("")

  const [tipAmount, setTipAmount] = useState({tip: 0.00, total: 0.00})

  function handleBillChange(e) {
    setBill(e.target.value)
  }

  function handlePeopleChange(e) {
    setNumberOfPeople(e.target.value)
  }

  function handleCustomPercent(e) {
    setCustomPercent(e.target.value)
  }

  useEffect(() => {
   const totalBill = (bill*(100+Number(customPercent)))/100
   const totalPlusTip = (totalBill/numberOfPeople).toFixed(2)
   const tipPerPerson = ((totalBill - bill) / numberOfPeople).toFixed(2)

   console.log(totalBill, totalPlusTip, tipPerPerson)

   if(bill && numberOfPeople && customPercent){
      setTipAmount(prevValue => ({tip: tipPerPerson, total: totalPlusTip}))
   }
   
  },[bill, numberOfPeople, customPercent])

  function resetCalculator() {
    setCustomPercent("")
    setNumberOfPeople("")
    setBill("")
    setTipAmount({tip: 0.00, total: 0.00})
  }

  return (
    <div className="App">
      <div className ="container">
      <h1>SPLI<br />TTER</h1>
      <div className="main-app">
        <div className="main-tip">
          <p className="headings">Bill</p>
          <input name="bill" className="bill-input" type="number" placeholder="0" value = {bill} onChange={handleBillChange}/>
        </div>

        <div className="main-select-tip">
          <p className="headings">Select Tip %</p>
          <ul className="tip-selections">
            <li>
              <input type="radio" id='5p' name="percent" value={5} onChange ={handleCustomPercent}  />
              <label htmlFor="5p">5%</label>
            </li>
            <li>
              <input type="radio" id='10p' name="percent" value={10} onChange ={handleCustomPercent}  />
              <label htmlFor="10p">10%</label>
            </li>
            <li>
              <input type="radio" id='15p' name="percent" value={15} onChange ={handleCustomPercent}  />
              <label htmlFor="15p">15%</label>
            </li>
            <li>
              <input type="radio" id='25p' name="percent" value={25} onChange ={handleCustomPercent}  />
              <label htmlFor="25p">25%</label>
            </li>
            <li>
              <input type="radio" id='50p' name="percent" value={50} onChange ={handleCustomPercent}  />
              <label htmlFor="50p">50%</label>
            </li>
            <li>
              <input
              name="custom-tip"
              className="bill-input"
              type="number"
              placeholder="Custom"  
              value={customPercent} 
              onChange ={handleCustomPercent}        
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
            value={numberOfPeople}
            onChange = {handlePeopleChange}
          />
        </div>
        <div className='final-cost-rest'>
          <div className='final-tip-amount'>
            <p>Tip Amount <br/><span>/ person</span></p>
            <p className='total-price'>${tipAmount.tip}</p>
          </div>
          <div className='final-total'>
            <p>Total <br/><span>/ person</span></p>
            <p className='total-price'>${tipAmount.total}</p>
          </div>
          <button disabled={false} onClick={resetCalculator}>RESET</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
