
import React from 'react';
import  './register.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


function Register() {
    let initialFormState = {username: '', email: '', password: ''}
    const [values, setValues] = useState (initialFormState)
    let url = 'https://nameless-anchorage-51402.herokuapp.com/users/'
    let history = useHistory ()

    const handleChange = (e)  =>{
       setValues ({...values, [e.target.name]: e.target.value})
      
      }
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${url}`, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.status === 201) {
                history.push('/');
                setValues(initialFormState)
                
            }
        } catch (err) {
            console.log(err)
        }
    }
 

    
    
    return (
        <div className="form">
        <h1>Register</h1>
        <form onSubmit = {handleSubmit}>
          <input name= 'username'value={values.username} onChange= {(e) => handleChange(e)} type="username" placeholder="username" id="username" />
          <label htmlFor="username">Username</label>

          <input name= 'email' value={values.email} onChange= {(e) => handleChange(e)} type="email" placeholder="email" id="email" />
          <label htmlFor="email">Username</label>

          <input name= 'password'value={values.password} onChange= {(e) => handleChange(e)} type="password" placeholder="Password" id="password" />
          <label htmlFor="password">Password</label>

         

          <button type="submit">Sign Up</button>
          
        </form>
      </div>
    );
}

export default Register;


