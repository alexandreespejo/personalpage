import { createContext, useEffect, useState } from 'react';
const TabContext = createContext();
const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activePage, setActivePage] = useState(
    sessionStorage.getItem('currentyPage') === null
      ? 0
      : parseInt(sessionStorage.getItem('currentyPage'))
  );
  useEffect(() => {
    sessionStorage.setItem('currentyPage', activePage);
  }, [activePage]);

  return (
    <TabContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activePage,
        setActivePage,
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export { TabContext, TabProvider };
