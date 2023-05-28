import React from 'react';

const InputField = ({hint, handleChange, inputRef}) => {
	return (
		<input required={true} type={"text"} placeholder={hint} onChange={handleChange} ref={inputRef}/>
	);
};

export default InputField;
