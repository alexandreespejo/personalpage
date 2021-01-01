import { useContext } from 'react';
import { TabContext } from '../../contexts/tab';
import pic1 from '../../assets/photo1.png';
import Main from '../main';
import Footer from './Footer';
import Content from './Content';
const Projects = () => {
  const content = [
    {
      name: 'Portifólio Web',
      descripition:
        'Dolor id velit id ullamco sit. Exercitation quis ea duis deserunt occaecat do enim fugiat laborum reprehenderit. Exercitation mollit laborum esse Lorem veniam quis.',
      picture: `${pic1}`,
      links: [
        { name: 'aaa', src: 'google.com' },
        { name: 'bbb', src: 'youtube.com' },
      ],
    },
    { name: 'projeto2' },
    { name: 'projeto3' },
  ];
  const { activeTab, setActiveTab } = useContext(TabContext);
  return (
    <Main>
      <Content contentList={content} active={activeTab} />
      <Footer contentList={content} active={activeTab} set={setActiveTab} />
    </Main>
  );
};

export default Projects;
