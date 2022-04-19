import './App.css';
import { useState } from 'react';
import Nav from "./Nav";

function App() {
  const[from,setFrom]=useState("")
  const[to,setTo]=useState("")
  const[convertfrom,setConvertfrom]=useState("")
  const[convertto,setConvertto]=useState("")
  const[value,setValue]=useState("")
  const[convertvalue,setConvertvalue]=useState("")
  const[amt,setAmt]=useState(0)
  const[button,setButton]=useState(false)
  const[button2,setButton2]=useState(false)
  const enterfrom=(e)=>{
    let check=e.target.value
    setFrom(check.toUpperCase())
  }
  const enterto=(e)=>{
    let check=e.target.value
    setTo(check.toUpperCase())
  }
  const confrom=(e)=>{
    let check=e.target.value
    setConvertfrom(check.toUpperCase()) 
  }
  const conto=(e)=>{
    let check=e.target.value
    setConvertto(check.toUpperCase()) 
  }
  const amount=(e)=>{
    setAmt(e.target.value)
  }

  const handleClick=async(sat)=>{
    setValue("")
    setButton(true)
   const url=`https://api.getgeoapi.com/v2/currency/convert?api_key=fdb4c83c08af3cb994fbdb2c151365cc18a60bc1&from=${from}&to=${to}&amount=1&format=json`
   const response=await fetch(url);
   const result=await response.json();
   console.log(result.rates[sat].rate)
  setValue(result.rates[sat].rate)
 }


 const handleClickofconvert=async(sat)=>{
  setValue("")
  setButton2(true)
 const url=`https://api.getgeoapi.com/v2/currency/convert?api_key=fdb4c83c08af3cb994fbdb2c151365cc18a60bc1&from=${convertfrom}&to=${convertto}&amount=${amt}&format=json`
 const response=await fetch(url);
 const result=await response.json();
 console.log(result.rates[sat].rate_for_amount)
 setConvertvalue(result.rates[sat].rate_for_amount)
 

  }
  return (
  <>
  <Nav/>
  <div className='row g-0'>
  <div className='container d-flex justify-content-center mt-3'>
  <div className="card pb-4 shadow-lg bg-body rounded" style={{width:"28rem"}}>
  <h5 className="card-header text-center cp">Check Price</h5>
        <div className='px-4'>
        <label  className="form-label">From</label>
          <input type="text" className="form-control input-sty" placeholder='From' onChange={(e)=>enterfrom(e) } value={from}/>
          <label className="form-label">To</label>
          <input type="text" className="form-control input-sty" placeholder='To' onChange={(e)=>enterto(e)} value={to}/>  
        </div>
        <div className='px-4 d-flex justify-content-center'>
       <button className="btn mt-4 rounded-pill bg-warning" onClick={()=>handleClick(to)}>Check Price</button>
        </div>
        {button&&<div className='px-4'>
        <label className="form-label" >Value</label>
        <input type="text" className="form-control input-sty " placeholder='Value of amount 1' value={value}/>
        </div>}

  </div> 
  </div>



  <div className='container d-flex justify-content-center mt-3'>
    <div className="card pb-2 shadow-lg bg-body rounded" style={{width:"28rem"}}>
     <h5 className="card-header text-center cp">Converter</h5>
        <div className='px-4'>
        <label  className="form-label">From</label>
          <input type="text" className="form-control input-sty" placeholder='From' onChange={(e)=>confrom(e) } value={convertfrom}/>
          <label className="form-label">To</label>
          <input type="text" className="form-control input-sty" placeholder='To' onChange={(e)=>conto(e)} value={convertto}/>  
          <label className="form-label">Amount</label>
          <input type="number" className="form-control input-sty" placeholder='Enter the amount ' onChange={(e)=>amount(e)} value={amt}/>  
        </div>

        <div className='px-4 d-flex justify-content-center'>
        <button className="btn mt-4 rounded-pill bg-warning" onClick={()=>handleClickofconvert(convertto)}>Check Price</button>
        </div>
        {button2&&<div className='px-4'>
        <label className="form-label">Value</label>
        <input type="text" className="form-control input-sty" placeholder='Value of amount 1' value={convertvalue}/>
        </div>}
  
    </div> 
  </div>
    


  </div>
  </>
  );
}

export default App;
