import React, {useContext, useEffect, useState} from 'react';
import "./Statistics.css"
import Context from "../../context/Context";
const StatisticItem = ({name}) => {
	const {tasks} = useContext(Context)
	const [count, setCount] = useState(0)
	const countTasks = () => {
		let count =  0
		if(name.toLowerCase() === "all"){
			count = tasks.length
		}
		else if(name.toLowerCase() === "active"){
			count = tasks.filter(task => task.status === "active").length
		}
		else if(name.toLowerCase() === "completed"){
			count = tasks.filter(task => task.status === "completed").length
			
		}
		
		setCount(count)
	}
	
	useEffect(() => {
		countTasks()
	},[tasks])
	return (
		<div className={`statistic_item ${name.toLowerCase()+"_stat"}`}>
			<span className="title">{name}</span>
			<span className="count">{count}</span>
		</div>
	);
};

export default StatisticItem;
