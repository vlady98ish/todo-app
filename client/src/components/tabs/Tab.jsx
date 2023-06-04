import React, {useContext} from 'react';
import "./Tab.css"
import Context from "../../context/Context";
const Tab = ({name}) => {
	const tabDetails = useContext(Context)
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
