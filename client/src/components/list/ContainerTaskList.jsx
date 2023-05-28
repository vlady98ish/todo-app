import React, {useEffect,useState} from 'react';
import TaskItem from "./TaskItem";
import {deleteTask, getTasks, updateTask} from "../../services/taskService";
import {ERROR, showToastMessage, sortByStatus, SUCCESS} from "../../util/helper";


const ContainerTaskList = () => {
	const  [taskList, setTaskList] = useState()
	const [isError,setIsError] = useState(false)
	
	const handleDelete = async (id) => {
		const response = await deleteTask(id)
		if(response.status === 200){
			const updatedList = taskList.filter(task => task.id !== id)
			setTaskList(updatedList)
			showToastMessage(SUCCESS, "Task was deleted successfully")
		} else {
			showToastMessage(ERROR, "Error deleting task.")
		}
		
	}
	
	const handleUpdate = async (id,status) => {
		const response = await updateTask(id,status)
		if(response.status === 201){
			setTaskList((prevTaskList) => {
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
		getTasks()
			.then((response) => {
				if(response.status === 200){
					console.log(response)
					console.log(response.data)
					sortByStatus(response.data)
					setTaskList(response.data)
					setIsError(false)
				}
				else if(response.status === 500){
					setIsError(true)
				}
				
			})
			.catch(error =>{
				setIsError(true)
				showToastMessage(ERROR, 'Error fetching tasks:',error.message)
			})
		
	},[])
	
	
	return (
		!isError &&(
			<div className="task_list">
				{taskList && taskList.map(task =><TaskItem  key={task.id} task={task} onDelete={() => handleDelete(task.id)} onUpdate={handleUpdate}/>)}
			</div>
		)
		
	);
};

export default ContainerTaskList;
