import React from 'react';

const InputField = ({hint}) => {
	return (
		<input required={true} type={"text"} placeholder={hint}/>
	);
};

export default InputField;
