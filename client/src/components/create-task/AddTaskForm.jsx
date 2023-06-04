import React, {useContext, useRef, useState} from 'react';
import InputField from "./InputField";
import Button from "./Button";
import "./CreateTask.css"
import "../../App.css"
import {addTask} from "../../services/taskService";
import {ERROR, showToastMessage, SUCCESS} from "../../util/helper";
import Context from "../../context/Context";

const AddTaskForm = () => {
	const [taskName, setTaskName] = useState("")
	const {tasks,updateTasks} = useContext(Context)
	const inputRef = useRef(null);
	const handleChange = (e) =>{
		e.preventDefault()
		
		setTaskName(e.target.value)
	}
	
	const submitForm = (e) => {
		e.preventDefault()
		const task = {
			"title": taskName,
				"status": "active"
		}
		try{
			addTask(task)
				.then((response) => {
					console.log(response)
					console.log(response.data)
					const updatedTaskList = [response.data,...tasks]
					console.log(updatedTaskList)
					updateTasks(updatedTaskList)
					showToastMessage(SUCCESS, "Task added successfully")
				})
		}catch (error){
			showToastMessage(ERROR, "Create task failed ")
		}
		inputRef.current.value = ''
		
	}
	return (
		<form className="flex gap mt" onSubmit={submitForm}>
			<InputField hint="New task..." handleChange={handleChange} inputRef={inputRef}/>
			<Button />
		</form>
	);
};

export default AddTaskForm;
