import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Projects from './components/Projects';
import Project from './components/Project';
import Home from './components/Home';
import Form from './components/Form';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className='navbar'>
        <h1>Project App</h1>
        <div className='links'>
        <NavLink className='link' to='/'>Home</NavLink>
        <NavLink className='link' to='/projects'>Projects</NavLink>
        </div>
      </div>

      <div>
      <button><NavLink to='/project-form'>Add A Project</NavLink></button>
      </div>

      <Route exact path='/' component={Home} />
      <Route path='/project-form' render={() => <Form {...props} />} />
      <Route path='/projects' render={props => <Projects {...props} />} />
    </div>
  );
}

export default App;
