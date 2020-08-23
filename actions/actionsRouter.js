const express = require('express');

const actions = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
    actions.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            errorMessage: "Error getting actions"
        })
    })
})

router.post('/', (req, res) => {
    const actionBody = req.body;
    if(!actionBody){
        res.status(400).json({
            message: "Could NOT ADD action"
        })
    }
    actions.insert(actionBody)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            errorMessage: "Error creating action"
        })
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    if(!id){
        res.status(400).json({
            message: "Could NOT retrieve project ID"
        })
    } else {
        actions.update(id, changes)
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errorMessage: "Error could NOT UPDATE action"
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
        actions.remove(id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errorMessage: "Error could NOT DELETE action"
            })
        })
    }
})

module.exports = router;