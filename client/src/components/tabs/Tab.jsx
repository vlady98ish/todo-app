import React from 'react';
import "./Tab.css"
const Tab = ({name}) => {
	return (
		<li>
			<a className="tab" href="#">{name}</a>
		</li>
	);
};

export default Tab;
