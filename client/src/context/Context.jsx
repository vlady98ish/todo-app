import {createContext, useState} from "react";

 const Context = createContext({});

export const ContextProvider = ({children}) => {
 const [activeTab,setActiveTab] = useState('all')
 const [tasks,setTasks] = useState([]);
 const changeTab = (tab) => {
  setActiveTab(tab)
 }
 
 const updateTasks = (tasks) => {
  setTasks(tasks)
 }
 
 
 return (
   <Context.Provider value={{activeTab,changeTab,tasks,updateTasks}}>
    {children}
   </Context.Provider>
 )
}





export default Context
