import React, {useState} from 'react';
import DeleteIcon from "../../assets/ic_delete.svg"
import DeleteRedIcon from "../../assets/ic_delete_red.svg"
const DeleteButton = ({onDelete}) => {
	const [isHovered, setIsHovered] = useState(false)
	
	
	const handleMouseEnter = () =>{
		setIsHovered(true)
	}
	
	const handleMouseExit = () =>{
		setIsHovered(false)
		
	}
	return (
		<button className="delete-button" onClick={onDelete} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
			<img src={isHovered ? DeleteRedIcon : DeleteIcon} alt="Delete Icon" width={30} height={30}/>
		</button>
	);
};

export default DeleteButton;
