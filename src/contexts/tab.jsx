import { createContext, useState } from 'react';
const TabContext = createContext();
const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export { TabContext, TabProvider };
