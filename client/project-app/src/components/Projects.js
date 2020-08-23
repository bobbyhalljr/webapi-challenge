import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import Project from './Project';

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

    const deleteProject = () => {
        const id = props.match.params.id;
        axios.delete(`http://localhosy:5000/api/projects/${id}`)
        .then(res => {
            console.log(res.data)
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
                        <NavLink to='/project'><h2>{project.name}</h2></NavLink>
                        <h3>{project.description}</h3>
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                )
            })}

        <Route path='/project/:id' render={props => <Project {...props} />} />
        </div>
    )
}

export default Projects;