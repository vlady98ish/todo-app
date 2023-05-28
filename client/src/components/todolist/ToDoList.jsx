import React from 'react';
import "./ToDoList.css"
import CreateContainer from "../create-task/CreateContainer";
import TabsContainer from "../tabs/TabsContainer";
import ContainerTaskList from "../list/ContainerTaskList";
const ToDoList = () => {
	return (
		<div className="container">
			<CreateContainer/>
			<TabsContainer/>
			<ContainerTaskList/>
		</div>
	);
};

export default ToDoList;
