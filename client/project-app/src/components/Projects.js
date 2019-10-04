import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = (props) => {
    const [projects, setProjects] = useState([]);

    const getProjects = () => {
        axios.get('http://localhost:5000/api/projects')
        .then(res => {
            console.log(res.data)
            setProjects(res.data)
        })
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <div>
            {projects.map(project => {
                return (
                    <div className='project' key={project.id}>
                        <h2>{project.name}</h2>
                        <h3>{project.description}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;