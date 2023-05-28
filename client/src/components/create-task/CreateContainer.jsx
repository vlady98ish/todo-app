import React from 'react';
import InputField from "./InputField";
import Button from "./Button";
import "./CreateTask.css"
import "../../App.css"
const CreateContainer = () => {
	return (
		<div className="flex gap">
			<InputField hint="New task..."/>
			<Button/>
		</div>
	);
};

export default CreateContainer;
