const express = require('express')
const router = express.Router()
const Task = require('../model/Task')

router.get('/tasks/complete', (req, res) => {
    Task.find({ complete: true }).exec()
        .then(data => res.send(data))
})

router.get('/tasks/incomplete', (req, res) => {
    Task.find({ complete: false }).exec()
        .then(data => res.send(data))
})

router.post('/task', (req, res) => {
    const { title, description } = req.body
    const newTask = new Task({ title, description })
    newTask.save()
        .then(savedTask => res.send(savedTask))
})

router.put('/task', (req, res) => {
    const { id } = req.body
    Task.findOneAndUpdate({ _id: id }, { complete: true })
        .exec((err, task) => { res.send(task) })
})
router.delete('/task/:id', (req, res) => {
    const { id } = req.params
    Task.findOneAndDelete({ _id: id })
        .exec((err, task) => { res.send(task) })
})

module.exports = router