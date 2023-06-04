import React from 'react';
import "./ToDoList.css"
import AddTaskForm from "../create-task/AddTaskForm";
import TabsContainer from "../tabs/TabsContainer";
import ContainerTaskList from "../list/ContainerTaskList";
import StatisticContainer from "../statistics/StatisticContainer";
const ToDoList = () => {
	return (
		<div className="container">
			<StatisticContainer/>
			<AddTaskForm/>
			<TabsContainer/>
			<ContainerTaskList/>
		</div>
	);
};

export default ToDoList;
