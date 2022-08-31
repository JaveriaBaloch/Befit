import img from "../img/homepage/Asset 6-20.jpg"
import {useEffect, useState} from 'react'
function Calculate(){
    const [name,setName] = useState("")
    const [height,setHeight] = useState("")
    const [weight,setWeight] = useState("")
    const [heightInCentimeters,setHeightInCentimeters] = useState("")
    const [result,setResult] = useState(0.00)
    const [display,setDisplay] = useState(0.00)
    const [show,setShow] = useState(false)
useEffect (()=>{
    setWeight(parseFloat(weight))
    setHeight(parseFloat(height))
    if(isFinite(weight)&& isFinite(height)){
        setHeightInCentimeters((height/100))
        let r = (weight /(heightInCentimeters*heightInCentimeters)).toFixed(2);
        setResult(r)
    }
    if(result < 18.5){
        setDisplay("Underweight. You may want to consider requesting a diet and training plan.");
      }
      else if(result >=18.5 && result< 25){
        setDisplay("at a Normal Weight.")
      }
      else if(result >=25 && result < 30){
        setDisplay("Overweight. You may want to consider requesting a diet and training plan.")
      }
      else if(result >=30 && result < 35){
        setDisplay("Obese. You may want to consider requesting a diet and training plan.");
      }
     else if(result > 35){
        setDisplay("Clinically Obese. You may want to consider requesting a diet and training plan.");
      }
      else{
        setDisplay("Invalid input!");
      }
})
    const bmi = (e) =>{
        e.preventDefault()
        if(height == '' || weight == '' || name == ''){
            setDisplay('Please fill out ALL the input fields!');
            setShow(true)
        
          }
          else{
            setShow(true)
        //   document.querySelector('.comment').innerHTML = `${name}: you are <span id="comment">${status}</span>`;
         }
        
    }
    return( 
    <section className="my-5 BMI-Calculator">
         <div className="heading mx-auto">
            <h1 className="text-center mt-3">Check your BMI!</h1>
            <div className="mx-auto mb-4"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-8 mx-auto">
                    <form className="card card-body text-center blue-card" onSubmit={bmi}>
                        <div>
                            <h2>BMI Calculator</h2>
                            <hr/>
                        </div>
                        <input className="form-control my-2" placeholder="Name" required onChange={e=>setName(e.target.value)}/>
                        <input className="form-control my-2" placeholder="Weight (kg)" required onChange={e=>setWeight(e.target.value)}/>
                        <input className="form-control my-2" placeholder="Height (cm)" required onChange={e=>setHeight(e.target.value)}/>
                        <button type="submit" class="btn button active mx-auto text-black">Calculator</button>
                    </form>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-8 mx-auto my-3">
                {show&&  <div>
                            <h1>Findings:</h1>
                            <p>Dear {name}, you are currently {display}</p>
                            <p>Your BMI is {result}.</p>
                        </div> }
                </div>
                <div className="d-xsm-none col-lg-4 ms-auto d-lg-block d-md-none d-sm-none">
                     <img src={img}/>
                </div>
            </div>
        </div>
    </section>
)}
export default Calculate
