import { useState } from 'react';
import './App.css';

function App() {
 
 const [weight, setWeight] = useState(0)
 const [bottles, setBottles] = useState(0)
 const [time, setTime] = useState(0)
 const [gender, setGender] = useState("male")
 const [alcohol, setAlcohol] = useState(0)
 

 const calculate = (e) => {
  e.preventDefault()
  let result = 0
  let litres = bottles * 0.33
  let grams = litres * 8 * 4.5
  let burning = weight / 10
  let gleft = grams - (burning * time)

  if (gender === "male"){
    result = gleft / (weight * 0.7)
  } else {
    result = grams / (weight * 0.6)
  }
  setAlcohol(result)
 }
  return (
 <div id="container">
  <h3>Calculating alcohol blood level</h3>
  <form onSubmit={calculate}>
    <div>
      <label>Weight</label>
      <input value={weight} onChange={e => setWeight(e.target.value)}  />
    </div>
    <div>
      <label>Bottles</label>
      <input type="number" value={bottles} onChange={e => setBottles(e.target.value)}/>
    </div>
    <div>
      <label>Time</label>
      <input type="number" value={time} onChange={e => setTime(e.target.value)}/>
    </div>
    <div>
      <label>Gender</label>
      <input type="radio" name="gender" value="Male" onChange={e => setGender(e.target.value)} defaultChecked/><label>Male</label>
      <input type="radio" name="gender" value="Female" onChange={e=> setGender(e.target.value)}/><label>Female</label>
    </div>
    <div>
      <output>{alcohol.toFixed(2)}</output>
    </div>
  <button>Calculate</button>
  </form>
 </div>
  );
}

export default App;
