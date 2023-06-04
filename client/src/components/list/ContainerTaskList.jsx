import React, {useEffect,useState} from 'react';
import TaskItem from "./TaskItem";
import {deleteTask, getTasks, updateTask} from "../../services/taskService";
import {ERROR, showToastMessage, sortByStatus, SUCCESS} from "../../util/helper";
import {useContext} from "react";
import Context from "../../context/Context";


const ContainerTaskList = () => {
	const  {tasks,updateTasks} = useContext(Context)
	const [isError,setIsError] = useState(false)
	const {activeTab} = useContext(Context)
	const handleDelete = async (id) => {
		const response = await deleteTask(id)
		if(response.status === 200){
			const updatedList = tasks.filter(task => task.id !== id)
			updateTasks(updatedList)
			showToastMessage(SUCCESS, "Task was deleted successfully")
		} else {
			showToastMessage(ERROR, "Error deleting task.")
		}
		
	}
	
	
	
	const handleUpdate = async (id,status) => {
		const response = await updateTask(id,status)
		if(response.status === 201){
			updateTasks((prevTaskList) => {
				const updatedList = [...prevTaskList]
				const updatedTask = updatedList.find(task=> task.id === id)
				updatedTask.status = status
				sortByStatus(updatedList)
				
				return updatedList
			})
			showToastMessage(SUCCESS, "Task was updated successfully")
			
		} else {
			showToastMessage(ERROR, "Error updating task.")
		}
	}
	
	useEffect(() => {
		console.log(activeTab)
		getTasks()
			.then((response) => {
				if(response.status === 200){
					console.log(response)
					console.log(response.data)
					sortByStatus(response.data)
					updateTasks(response.data)
					setIsError(false)
				}
				else if(response.status === 500){
					setIsError(true)
				}
				
			})
			.catch(error =>{
				setIsError(true)
				showToastMessage(ERROR, 'Error fetching tasks:'+error.message)
			})
		
	},[activeTab])
	
	let filteredTasks = tasks;
	if (activeTab === 'active') {
		filteredTasks = tasks.filter(task => task.status === "active");
	} else if (activeTab === 'completed') {
		filteredTasks = tasks.filter(task => task.status === "completed");
	}
	
	
	return (
		!isError &&(
			<div className="task_list">
				{filteredTasks && filteredTasks.map(task =><TaskItem  key={task.id} task={task} onDelete={() => handleDelete(task.id)} onUpdate={handleUpdate}/>)}
			</div>
		)
		
	);
};

export default ContainerTaskList;
