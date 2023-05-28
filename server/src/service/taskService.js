

const {getAllTasks, getTaskbyId, create, update, deleteItem} = require("../model/task");
const getTasks = () =>{
		return getAllTasks()
}


const getTaskById = (id) => {
	return getTaskbyId(id)
}

const createTask = (task) => {
	return create(task)
}

const updateTask = (id, updateData) => {
	return update(id, updateData)
}

const deleteTask = (id) => {
	return deleteItem(id)
	
}

module.exports ={
	
		getTasks: getTasks,
	getTaskById: getTaskById,
	createTask: createTask,
	updateTask: updateTask,
	deleteTask: deleteTask
	
}