const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: String,
    description: String,
    complete: { type: Boolean, default: false }
})

const Task = mongoose.model('task', taskSchema)
module.exports = Task