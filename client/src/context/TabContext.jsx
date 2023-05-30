import {createContext, useState} from "react";

 const TabContext = createContext({});

export const TabContextProvider = ({children}) => {
 const [activeTab,setActiveTab] = useState('all')
 
 const changeTab = (tab) => {
  setActiveTab(tab)
 }
 
 
 return (
   <TabContext.Provider value={{activeTab,changeTab}}>
    {children}
   </TabContext.Provider>
 )
}





export default TabContext
