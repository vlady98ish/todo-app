import React from 'react';
import "./Statistics.css"
import StatisticItem from "./StatisticItem";
const StatisticContainer = () => {
	return (
		<div className="statistic_container">
			<StatisticItem name="All"/>
			<StatisticItem name="Active"/>
			<StatisticItem name="Completed"/>
		</div>
	);
};

export default StatisticContainer;
