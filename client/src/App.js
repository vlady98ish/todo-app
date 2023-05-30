import './App.css';
import ToDoList from "./components/todolist/ToDoList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TabContextProvider} from "./context/TabContext";
function App() {
  return (
    <div className="App">
      <TabContextProvider>
      <ToastContainer/>
    <ToDoList/>
      </TabContextProvider>
    </div>
  );
}

export default App;
