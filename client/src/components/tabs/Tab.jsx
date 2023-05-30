import React, {useContext} from 'react';
import "./Tab.css"
import TabContext from "../../context/TabContext";
const Tab = ({name}) => {
	const tabDetails = useContext(TabContext)
	const changeTab = () => {
		tabDetails.changeTab(name.toLowerCase())
		console.log(name.toLowerCase())
	}
	return (
		<li onClick={changeTab} >
			<a className={`tab ${tabDetails.activeTab === name.toLowerCase() ? "active" : ""}`} href="#">{name}</a>
		</li>
	);
};

export default Tab;
