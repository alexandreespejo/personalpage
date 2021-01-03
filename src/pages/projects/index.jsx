import { useContext } from 'react';
import { TabContext } from '../../contexts/tab';
import Footer from './Footer';
import Content from './Content';
import { data } from './projects';
const Projects = () => {
  const { activeTab, setActiveTab } = useContext(TabContext);
  return (
    <>
      <Content contentList={data} active={activeTab} />
      <Footer contentList={data} active={activeTab} set={setActiveTab} />
    </>
  );
};

export default Projects;
