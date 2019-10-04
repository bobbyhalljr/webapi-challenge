import React, { useState } from 'react';
import axios from 'axios';

const Project = (props) => {
    const [project, setProject] = useState({})

    const getProject= (props) => {
        const id = props.match.params.id;
        console.log(id)
        axios.get(`http://localhost:5000/api/projects/${id}`)
        .then(res => {
            console.log(res.data)
            setProject(res.data)
        })
        .catch(err => console.log(err.response))
    }

    return (
        <h1>yayy</h1>
    )
}

export default Project;