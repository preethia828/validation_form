import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function Registration() {

 const[name,setName] = useState("")
 const[password,setPassword] = useState("")
//const [isValidate,setIsValidate]=useState(false)
const [gender,setGender]=useState('')
const[language,setLanguage]=useState('')
const navigate = useNavigate();
 const nameValue=(e)=>{
   setName(e.target.value)
 }
 const passwordValue=(e)=>{
  setPassword(e.target.value)
 }
 const genderFu=(e)=>{
  setGender(e.target.value)
 }
 const languagefn=(e)=>{
  setLanguage(e.target.value)
 }
 const validation=()=>{
   if(name!=="" && password!=="" && gender!=='' && language!==""){
   //  setIsValidate(true)
     navigate('/login');
   }
   else{
    alert("Enter all the fields")
    //setIsValidate(false)
   }
 }
  return (
    <>
      <div className='container border border-5 border-info w-75 ' style={{minHeight:"100vh"}}>
      <h1 className='mt-5 mb-5 text-center' style={{marginTop:"20px"}}>Validation Form</h1>
      <div className='d-flex flex-column align-items-center'>
        <TextField id="outlined-basic" label="UserName" variant="outlined" className='w-50 mb-5' style={{height:"20px"}} onChange={nameValue} />
        <TextField id="outlined-basic" label="password" variant="outlined" className='w-50' style={{height:"20px"}} onChange={passwordValue} />
      </div>
        <div className='d-flex mt-5 justify-content-center me-5'>
        {/* <FormControl> */}
          <FormLabel id="demo-row-radio-buttons-group-label" className='mt-2 me-2'>Language</FormLabel>
          <span className='d-flex'>
            <FormControlLabel control={<Checkbox  />} label="English" onChange={languagefn} />
            <FormControlLabel control={<Checkbox  />} label="Hindi" onChange={languagefn} />
            <FormControlLabel control={<Checkbox  />} label="Malayalam" onChange={languagefn} />
          </span>
        {/* </FormControl> */}
        </div>
      <div className='d-flex justify-content-center me-5'>
        {/* <FormControl> */}
        <FormLabel id="demo-row-radio-buttons-group-label" className='mt-2 me-2'>Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group" onChange={genderFu}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      {/* </FormControl> */}
      </div> 
      <div className='d-flex justify-content-center'><label htmlFor="" className='me-5'>Message</label><input type="text" className='me-5 rounded'style={{height:"140px",width:"340px"}} /></div>
      <div className='d-flex justify-content-center'><button onClick={validation} className="btn btn-info mt-3" >Submit</button></div>
      </div>
      
    </>
  )
}


export default Registration