import React, {useRef, useState} from 'react';
import InputField from "./InputField";
import Button from "./Button";
import "./CreateTask.css"
import "../../App.css"
import {addTask} from "../../services/taskService";
import {ERROR, showToastMessage, SUCCESS} from "../../util/helper";

const AddTaskForm = () => {
	const [taskName, setTaskName] = useState("")
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
		addTask(task)
			.then((response) =>{
				if(response.status ===200){
					console.log(response)
					console.log(response.data)
					showToastMessage(SUCCESS, "Task added successfully")
				}
				else if(response.status === 500){
					showToastMessage(ERROR, "Create task failed ")
				}
			})
			.catch(error => {
				showToastMessage(ERROR, 'Error adding task:',error.message)
			})
		inputRef.current.value = ''
		
	}
	return (
		<form className="flex gap" onSubmit={submitForm}>
			<InputField hint="New task..." handleChange={handleChange} inputRef={inputRef}/>
			<Button />
		</form>
	);
};

export default AddTaskForm;
