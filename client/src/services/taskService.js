import axios from "axios"
const API_URL = "http://localhost:4000/tasks"

export function getTasks(status){
	const filter = {status: status}
	const queryParams = new URLSearchParams(filter).toString();
	return axios.get(API_URL+"?"+queryParams)
}

export function getTaskById(id){
	return axios.get(API_URL+"/"+id)
}

export function addTask(task){
	return axios.post(API_URL,task)
}


export function deleteTask(id){
	return axios.delete(API_URL+"/"+id)
}

export function updateTask(id, status){
	const updatedData = {
		"status": status
	}
	return axios.put(API_URL+"/"+id,updatedData)
}