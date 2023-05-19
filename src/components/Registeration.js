import React,{useState} from "react";
import Form from "./Forms";
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const MyToggleButton = (props) => {
  const [selectedValue, setSelectedValue] = useState(0);

const handleChange = (event, newValue) => {
    console.log(selectedValue)
    props.toggle(!selectedValue);
    setSelectedValue(prev=>!prev);
    
    
  };

  return (
    <ToggleButtonGroup
      exclusive
    >

      {selectedValue ? <><ToggleButton onClick={handleChange} style={{color:'blueviolet'}} value="Login">Login</ToggleButton>
      <ToggleButton  onClick={handleChange}value="Signup">Signup</ToggleButton></>
      : <><ToggleButton onClick={handleChange}  value="Login">Login</ToggleButton>
      <ToggleButton  onClick={handleChange} style={{color:'blueviolet'}} value="Signup">Signup</ToggleButton></>}
    </ToggleButtonGroup>
  );
};

const Registeration=()=>{
   const [method,setmethod]=useState(0);

   const changeHandler=(item)=>{
    console.log(item);
      setmethod(item);
   }

  return (<>
  <div>
    <div><h1>Credentails to use</h1>
    <p>User-Email: test@test.com</p>
    <p>Admin-email:admintest@test.com</p>  
    <p>Password:12345678</p></div>
   <MyToggleButton toggle={changeHandler}  />
    <Form req={method}/>
    </div>
    </>)

}

export default Registeration;