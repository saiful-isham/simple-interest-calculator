
import { useState } from 'react';
import './App.css'
import { TextField , Stack ,Button} from '@mui/material';


function App() {
  const [interest,setinterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isPrincipleInValid,setPricipleInValid] = useState(false)
  const [isRateInValid,setRateInValid] = useState(false)
  const [isYearInValid,setYearInValid] = useState(false)


  const handleInputValidation = (tag)=>{
   const {name,value} = tag
  //  console.log(name,value);
  console.log(!!value.match(/^[0-9]*.[0-9]+$/));
  if(!!value.match(/^\d*\.?\d+$/)){

    if(name=="principle"){
      
      setPrinciple(value)
      setPricipleInValid(false)
    }else if(name=="rate"){
      setRate(value)
      setRateInValid(false)

    }else{
      setYear(value)
     setYearInValid(false)
    }
     
    


  }else{
    if(name=="principle"){

      setPrinciple(value)
      setPricipleInValid(true)
    }else if(name=="rate"){
      setRate(value)
      setRateInValid(true)

    }else{
      setYear(value)
     setYearInValid(true)
    }

  }

  }


  const handleclaculate = (e)=>{
    e.preventDefault()
    console.log("button clicked");

    if(principle && year && rate ){

      setinterest(principle*rate*year/100)
    }else{
      alert('fill the form completely')
    }
  }
  const handleclear = ()=>{
    setinterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPricipleInValid(false)
    setRateInValid(false)
    setYearInValid(false)

  }
  

  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark p-5'>
      <div style={{width:'600px'}} className='bg-light p-5 rounded'>
      <h3>simple interest calculator</h3>
      <p>calculate your simple intrest easily</p>
      <div className='d-flex justify-content-center align-items-center p-3 bg-success rounded shodow flex-column text-light'>
        <h1> ₹ {interest}</h1>
        <p className='fw-bolder '>total simple interest</p>

      </div>
      <form  className="mt-5">
        <div className="mb-3">
        <TextField value={principle||""} name='principle' onChange={e=>handleInputValidation(e.target)} className='w-100' id="principle" label="principle amount" variant="outlined" />
        
        </div>
        { isPrincipleInValid &&
           <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount !!! </div>

        }
        <div className="mb-3">
        <TextField value={rate||""} name='rate' onChange={e=>handleInputValidation(e.target)} className='w-100' id="rate" label="rate of interest %" variant="outlined" />
        
        </div>
        { isRateInValid &&
           <div className="mb-3 text-danger fw-bolder">Invalid rate Amount !!! </div>

        }

        <div className="mb-3">
        <TextField value={year||""} name='year' onChange={e=>handleInputValidation(e.target)} className='w-100' id="year" label="time period" variant="outlined" />
        
        </div>
        { isYearInValid &&
           <div className="mb-3 text-danger fw-bolder">Invalid year Amount !!! </div>

        }
        <Stack direction="row" spacing={2}>
        <Button disabled={isPrincipleInValid||isRateInValid||isYearInValid} type='submit' onClick={handleclaculate} style={{width:'50%', height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
        <Button onClick={handleclear} style={{width:'50%', height:'70px'}} variant="outlined">reset</Button>

        </Stack>
      </form>

      


      </div>
     
    </div>
  )
}

export default App
