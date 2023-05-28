import './App.css';
import ToDoList from "./components/todolist/ToDoList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
    <ToDoList/>
    </div>
  );
}

export default App;
