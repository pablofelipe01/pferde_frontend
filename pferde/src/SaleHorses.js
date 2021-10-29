import React from 'react';
import  './register.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function SaleHorses(props) {
    let initialFormState = 
    {
        
        
            name: "",
            line: "",
            breed: "",
            img_url: "",
            video_url: ""
        
        
    }
    const [values, setValues] = useState (initialFormState)
    let url = 'https://nameless-anchorage-51402.herokuapp.com/pferde/'
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
        <h1>Sale Horse</h1>
        <form onSubmit = {handleSubmit}>
          <input name= 'name'value={values.user} onChange= {(e) => handleChange(e)} type="name" placeholder="name" id="name" />
          <label htmlFor="name">Name</label>

          <input name= 'line' value={values.line} onChange= {(e) => handleChange(e)} type="text" placeholder="Line" id="line" />
          <label htmlFor="line">Line</label>

          <input name= 'breed'value={values.breed} onChange= {(e) => handleChange(e)} type="text" placeholder="Breed" id="line" />
          <label htmlFor="breed">Breed</label>

          <input name= 'image_url'value={values.image_url} onChange= {(e) => handleChange(e)} type="url" placeholder="Image url" id="image_url" />
          <label htmlFor="image_url">Image Url</label>

          <input name= 'video_url'value={values.video_url} onChange= {(e) => handleChange(e)} type="url" placeholder="Video url" id="video_url" />
          <label htmlFor="video_url">Video Url</label>
          

         

          <button type="submit">Sale</button>
          
        </form>
      </div>
    );
}

export default SaleHorses;