import { useContext } from 'react';
import { TabContext } from '../../contexts/tab';
import { Mother, Content } from './style';
import Header from '../../components/Header';
import About from '../about';
import Projects from '../projects';
import Contact from '../contact';
const Main = () => {
  const { activePage } = useContext(TabContext);
  return (
    <Mother>
      <Header />
      <Content show={activePage === 0}>
        <About />
      </Content>
      <Content show={activePage === 1}>
        <Projects />
      </Content>
      <Content show={activePage === 2}>
        <Contact />
      </Content>
    </Mother>
  );
};
export default Main;
