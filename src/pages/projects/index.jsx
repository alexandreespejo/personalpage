import { useContext } from 'react';
import { TabContext } from '../../contexts/tab';
import Footer from './Footer';
import Content from './Content';
import { contentList } from './projectData';
const Projects = () => {
  const { activeTab, setActiveTab } = useContext(TabContext);
  return (
    <>
      <Content contentList={contentList} active={activeTab} />
      <Footer contentList={contentList} active={activeTab} set={setActiveTab} />
    </>
  );
};

export default Projects;
