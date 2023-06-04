
const taskService = require("../service/taskService")
const getTasks = (req,res) => {
	let result = taskService.getTasks()
	if(result.err){
			res.status(500).set('Content-Type', 'application/json').json(result)
	} else{
		res.status(200).set('Content-Type', 'application/json').json(result)
	}
}





const getTaskById = (req,res) => {
	const id = req.params.id
	const result = taskService.getTaskById(id)
	if(result.err){
		res.status(500).set('Content-Type', 'application/json').json(result)
	}else if(result.length === 0){
		res.status(204).set('Content-Type', 'application/json').json(result)
		
	}
	else {
		res.status(200).set('Content-Type', 'application/json').json(result)
	}
}


const createTask = (req,res) => {
		const task = req.body
		const result = taskService.createTask(task)
	if(result.err){
		res.status(500).set('Content-Type', 'application/json').json(result)
	}
	else{
		res.status(201).set('Content-Type','application/json').json(result)
	}
}

const updateTask = (req,res) => {
	const id = req.params.id
	const updatedData = req.body
	const result = taskService.updateTask(id,updatedData)
	if(result.err){
		res.status(500).set('Content-Type', 'application/json').json(result)
		
	} else {
		res.status(201).set('Content-Type','application/json').json(result)
		
	}
}

const deleteTask = (req,res) => {
	const id = req.params.id
	const result = taskService.deleteTask(id)
	if(result.err){
		res.status(500).set('Content-Type', 'application/json').json(result)
		
	} else {
		res.status(200).set('Content-Type','application/json').json(result)
		
	}
}

module.exports ={
	getTasks: getTasks,
	getTaskById: getTaskById,
	createTask: createTask,
	updateTask: updateTask,
	deleteTask: deleteTask
}