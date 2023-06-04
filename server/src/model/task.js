const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
const dataFilePath = path.join(__dirname, 'db.json')


class Task {
	constructor(id, title,type,date,status) {
		this.id = id;
		this.type = type;
		this.title = title;
		this.date = date;
		this.status = status
	}
}

const getAllTasks =  () => {
	try {
		const data = fs.readFileSync(dataFilePath,'utf8')
		const jsonData = JSON.parse(data)
		console.log("GET ALL TASKS ")
		console.table(jsonData.tasks)
		return jsonData.tasks
	}catch (error){
		console.error("Error reading tasks from JSON file.")
		return {err: err.message};
	}
	
}


const getTaskbyId = (id) => {
	try {
		const data = fs.readFileSync(dataFilePath, 'utf8')
		const jsonData = JSON.parse(data)
		const task = jsonData.tasks.find(task => task.id === id)
		console.log(`Task by id ${id} ${task}`)
		return task
	} catch (error){
				console.error("Error reading task by ID from JSON file.")
		return {err: err.message}
	}
}

const createTask = (task) => {
	try {
		const data = fs.readFileSync(dataFilePath, 'utf8')
		const jsonData = JSON.parse(data)
		const taskID = uuid.v4()
		const newTask = {
			id: taskID,
			...task
		}
		jsonData.tasks.push(newTask)
		fs.writeFileSync(dataFilePath,JSON.stringify(jsonData))
		
		return newTask
	} catch (err){
			console.error("Error creating task in JSON file.")
			return {err: err.message}
	}
	
}


const updateTask = (id, updateData) => {
	try {
		const data = fs.readFileSync(dataFilePath, 'utf8')
		const jsonData = JSON.parse(data)
		const taskIndex = jsonData.tasks.findIndex(task => task.id === id)
		if(taskIndex === -1) {
			return {err: "Task not found"}
			
		}
		
		const updatedTask = {...jsonData.tasks[taskIndex],...updateData}
		jsonData.tasks[taskIndex] = updatedTask
		fs.writeFileSync(dataFilePath,JSON.stringify(jsonData))
		return updatedTask
	} catch (err){
		console.error("Error updating task in JSON file.")
		return {err: err.message}
	}
}

const deleteTask = (id) => {
	try {
		const data = fs.readFileSync(dataFilePath,'utf8')
		const jsonData = JSON.parse(data)
		const taskIndex = jsonData.tasks.findIndex(task => task.id === id)
		if(taskIndex === -1) {
			return {err: "Task not found"}
			
		}
		jsonData.tasks.splice(taskIndex,1)
		fs.writeFileSync(dataFilePath,JSON.stringify(jsonData))
		return taskIndex+1
	} catch (err){
		console.error("Error deleting task in JSON file.")
		return {err: err.message}
	}
}




module.exports = {
	Task,
	getAllTasks,
	getTaskbyId,
	create: createTask,
	update: updateTask,
	deleteItem: deleteTask
}


