import './App.css';
import ToDoList from "./components/todolist/ToDoList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ContextProvider} from "./context/Context";
function App() {
  return (
    <div className="App">
      <ContextProvider>
      <ToastContainer/>
    <ToDoList/>
      </ContextProvider>
    </div>
  );
}

export default App;
