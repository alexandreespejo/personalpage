import { useContext } from 'react';
import { TabContext } from '../../contexts/tab';
import Main from '../main';
import Footer from './Footer';
import Content from './Content';
const Projects = () => {
  const content = ['Em Breve', 'projeto2', 'projeto3'];
  const { activeTab, setActiveTab } = useContext(TabContext);
  return (
    <Main>
      <Content contentList={content} active={activeTab} />
      <Footer contentList={content} active={activeTab} set={setActiveTab} />
    </Main>
  );
};

export default Projects;
