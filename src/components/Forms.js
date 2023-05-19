import React, { useState } from 'react';
import { TextField, Button,Select,MenuItem } from '@mui/material';
import firebase from '../firebase';
import { collection, query, where, addDoc,getDocs } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { authSlice } from '../store/Auth';
const { login } = authSlice.actions;

const Form = (method) => {
    const dispatch=useDispatch();
     console.log(method);
     const Navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    category:''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission or validation logic here
    if(!method.req)
    {  
       try{
        const usercredential= await  firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email,formData.password)

        const user = usercredential.user;

      // Save user category to Firestore
      const usersCollectionRef = collection(firebase.firestore(), 'users');
      await addDoc(usersCollectionRef, {
        uid: user.uid,
        email: user.email,
        role: formData.category,
      });

      setFormData({
        
        email: '',
        password: '',
        category:''
      })   
       alert('You are signed in , Kindly login')
          
       } 
        catch(err){
            alert(err);
        }

    }
    else if(method.req)
    {
        try {
           const user = await firebase.auth().signInWithEmailAndPassword(formData.email, formData.password);
           console.log(user)
            //console.log('User logged in successfully');
             //redirecting to user page
             const usersCollectionRef = collection(firebase.firestore(), 'users');
             const q = query(usersCollectionRef, where('email', '==', formData.email));
             const queryyy = await getDocs(q);
     
             if (queryyy.empty) {
               console.log('No matching documents');
               return;
             } 
        let type=queryyy._snapshot.docs.keyedMap.root.value.data.value.mapValue.fields.role.stringValue;
        let idToken=user.user._delegate.accessToken
         let email=user.user._delegate.email;
            let details  = {idToken:idToken,email:email,role:type}

         dispatch(login(details));

             Navigate(`/dashboard`)
            
          } catch (error) {
            // Handle login errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login error:', errorCode, errorMessage);
          }

    }
  };

  return (
    <div className='container' >
        <div className='screen'>
    <form onSubmit={handleSubmit}>
        <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        className='login'
        required
      />
      <br/>
      <TextField
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
        className='login'
        required
      />
      <br/>
      {!method.req &&<Select
        labelId="dropdown-label"
        id="dropdown"
        name='category'
        value={formData.category}
        onChange={handleChange}
    >
        <MenuItem value="User">User</MenuItem>
        <MenuItem value="Admin">Admin</MenuItem>
     </Select>}
     <br/>
      <Button type="submit" variant="contained" color="primary">
        {!method.req?'Signup':'Log In'}
      </Button>
    </form>
    </div>
    </div>
  );
};

export default Form;
