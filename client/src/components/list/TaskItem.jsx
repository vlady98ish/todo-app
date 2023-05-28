import React from 'react';
import "./Task.css"
import "../../App.css"
const TaskItem = ({taskName}) => {
	return (
		<div className="task">
			<input type={"checkbox"} className="checkbox"/>
			<p>{taskName}</p>
		</div>
	);
};

export default TaskItem;
