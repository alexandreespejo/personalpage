import { createContext, useEffect, useState } from 'react';
const TabContext = createContext();
const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [experience, setExperience] = useState(100);
  const [level, setLevel] = useState(1);
  const [activePage, setActivePage] = useState(
    sessionStorage.getItem('currentyPage') === null
      ? 0
      : parseInt(sessionStorage.getItem('currentyPage'))
  );
  useEffect(() => {
    sessionStorage.setItem('currentyPage', activePage);
  }, [activePage]);
  useEffect(() => {
    if (experience >= 1000) {
      setExperience(0);
      setLevel(level + 1);
    }
  }, [experience, level]);

  return (
    <TabContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activePage,
        setActivePage,
        experience,
        setExperience,
        level,
        setLevel,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export { TabContext, TabProvider };
