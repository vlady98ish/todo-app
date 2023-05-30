import React, {useState} from 'react';
import "./Task.css"
import "../../App.css"
import DeleteButton from "../create-task/DeleteButton";
const TaskItem = ({task,onDelete,onUpdate}) => {
	const {id,title,status} = task
	
	const [taskStatus, setTaskStatus] = useState(status);
	
	const isCompleted = taskStatus === "completed"
	const handleCheckboxChange = (event) => {
		const { checked } = event.target;
		const newStatus = checked ? "completed" : "active";
		onUpdate(id,newStatus)
		setTaskStatus(newStatus);
	};
	
	return (
		<div className="task">
			<input type={"checkbox"} className="checkbox" checked={isCompleted} onChange={handleCheckboxChange} />
			<p className={`${isCompleted && "completed"}`}>{title}</p>
			<DeleteButton onDelete={onDelete}/>
		</div>
	);
};

export default TaskItem;
