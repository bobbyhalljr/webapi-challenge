const express = require('express');

const projects = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            errorMessage: "Error getting projects"
        })
    })
})

router.post('/', (req, res) => {
    if(!req.body.name || !req.body.description){
        res.status(400).json({
            message: "Please provide a name and description for the project"
        })
    } else {
        projects.insert(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errorMessage: "Could NOT add project to database"
            })
        })
    }
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    if(!id){
        res.status(400).json({
            message: "Could NOT retrieve project ID"
        })
    } else {
        projects.update(id, changes)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errorMessage: "Error could NOT UPDATE project"
            })
        })
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(400).json({
            message: "Could NOT retrieve project ID"
        })
    } else {
        projects.remove(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errorMessage: "Error could NOT DELETE project"
            })
        })
    }
})

module.exports = router;