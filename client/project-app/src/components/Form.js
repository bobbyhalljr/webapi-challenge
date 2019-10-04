import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const initialState = {
    name: '',
    description: '',
    completed: false
}

const Form = (props) => {
    const [project, setProject] = useState(initialState);

    const addProject = (e, props) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/projects', project)
        .then(res => {
            console.log(res.data)
            setProject(res.data.name)

            props.history.push('/projects')
        })
        .catch(err => console.log(err.response))
    }

   const handleChange = e => {
    let value = e.target.value;
    setProject({
        ...project,
        [e.target.name]: value
    })
   }

    return (
        <form onSubmit={addProject}>
            <input 
                type='text'
                name='name'
                value={project.name}
                onChange={handleChange}
                placeholder='Name'
            />
            <input 
                type='text'
                name='description'
                value={project.description}
                onChange={handleChange}
                placeholder='Description'
            />
            <button>Submit</button>
        </form>
    )
}

export default Form;