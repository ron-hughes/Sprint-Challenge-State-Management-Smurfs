import React, { useState } from 'react';
import axios from 'axios';

function AddForm() {

    const [ smurf, setSmurf ] = useState({
        name: '',
        age: '',
        height: ''
    })

    function handleChange(e){
        setSmurf({
            ...smurf,
            [ e.target.name ] : e.target.value
        })
    }
    function handleSubmit(e){
           
        axios.post('http://localhost:3333/smurfs', smurf)
            .then(res=> console.log(res))
            .catch(err=> console.log(err))
        setSmurf({
            name: '',
            age: '',
            height: ''
        })
    }
    return (
     
            <form onSubmit={handleSubmit}>
                <input placeholder='Smurf Name' type='text' name='name' value={smurf.name} onChange={handleChange}/>
                <input placeholder= 'Smurf Age' type='text' name='age' value={smurf.age} onChange={handleChange}/>
                <input placeholder='Smurf Height' type='text' name='height' value={smurf.height} onChange={handleChange}/>
                <button>Submit</button>
            </form>
    )
}

export default AddForm

