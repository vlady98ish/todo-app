const express = require('express')
const router = express.Router()
 const TaskController = require('../controller/taskController')


//Get all tasks
router.get('/', TaskController.getTasks)

//GET task for id
router.get('/:id', TaskController.getTaskById)

//POST /task Create new task
router.post('/', TaskController.createTask)

//PUT /task Update task
router.put('/:id', TaskController.updateTask)


//DELETE /task Delete task

router.delete('/:id', TaskController.deleteTask)


module.exports = router