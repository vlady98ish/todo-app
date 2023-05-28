import { toast } from 'react-toastify';

export const SUCCESS = "success"
export const ERROR = "error"

export const showToastMessage = (status, message) => {
	switch (status) {
		case SUCCESS:
			toast.success(message, {
				position: toast.POSITION.TOP_RIGHT
			});
			break;
		case ERROR:
			toast.error(message, {
				position: toast.POSITION.TOP_RIGHT
			});
			break;
		default:
			return;
	}
};

export const sortByStatus = (taskList) => {
	taskList.sort((a, b) => {
		if (a.status === "active" && b.status === "completed") {
			return -1; // a should come before b
		}
		if (a.status === "completed" && b.status === "active") {
			return 1; // b should come before a
		}
		return 0; // leave the order unchanged
	});
	console.log(taskList)
	
}