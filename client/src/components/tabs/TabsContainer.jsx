import React from 'react';
import Tab from "./Tab";
const TabsContainer = () => {
	return (
		<ul className="tab_container">
			<Tab name={"ALL"}/>
			<Tab name={"ACTIVE"}/>
			<Tab name={"COMPLETED"}/>
		</ul>
	);
};

export default TabsContainer;
