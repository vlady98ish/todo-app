import React from 'react';
import "./ToDoList.css"
import AddTaskForm from "../create-task/AddTaskForm";
import TabsContainer from "../tabs/TabsContainer";
import ContainerTaskList from "../list/ContainerTaskList";
const ToDoList = () => {
	return (
		<div className="container">
			<AddTaskForm/>
			<TabsContainer/>
			<ContainerTaskList/>
		</div>
	);
};

export default ToDoList;
