import Icon from '../../components/ProfileIcon';
import { useSpring, animated } from 'react-spring';
import { RightContent, LeftContent, Content } from './style';
import Knowledges from './AnimatedKnows';
import Label from './Text';
const About = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,200px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { delay: 300 },
  });
  const knowList = [
    {
      src: 'https://img.icons8.com/color/48/000000/react-native.png',
      name: 'React',
    },
    {
      src: 'https://img.icons8.com/color/48/000000/nodejs.png',
      name: 'Node',
    },
    {
      src: 'https://img.icons8.com/color/48/000000/javascript.png',
      name: 'JavaScript',
    },
    {
      src: 'https://img.icons8.com/color/48/000000/html-5.png',
      name: 'Html',
    },
    {
      src: 'https://img.icons8.com/color/48/000000/css3.png',
      name: 'Css',
    },
    {
      src: 'https://img.icons8.com/color/48/000000/typescript.png',
      name: 'TypeScript',
    },
    {
      src: 'https://img.icons8.com/color/48/000000/git.png',
      name: 'Git',
    },
    {
      src: 'https://img.icons8.com/color/48/000000/python.png',
      name: 'Python',
    },
    {
      src: 'https://img.icons8.com/color/48/000000/postgreesql.png',
      name: 'PostgreSQL',
    },
  ];
  const img =
    'https://avatars1.githubusercontent.com/u/62163105?s=460&u=5b60edb54072941138b7861e3acefd621c01a039&v=4';
  return (
    <Content>
      <LeftContent>
        <animated.h1 style={animation}>Alexandre Espejo</animated.h1>
        <Label fontSize={'20px'} fontColor={'rgba(179, 171, 154,0.5)'}>
          Desenvolvedor Full-Stack jr.
        </Label>
        <Label
          fontSize={'18px'}
          fontColor={'var(--text-secondary)'}
          margin={'50px 0px 0px 0px '}
        >
          Olá, sou o <strong>Alexandre Espejo</strong> um desenvolvedor de
          Bauru-SP que a pouco tempo está desbravando esse vasto universo da
          programação.Apaixonado por <strong>JavaScript</strong>, às tecnologias
          que mais gosto de estudar e trabalhar são{' '}
          <strong>Node.js, React.js e React Native</strong>, porem sempre estou
          aberto a me aventurar em novas tecnologias.
        </Label>
      </LeftContent>
      <RightContent>
        <Icon iconWidth={'200px'} children={img} />
        <Label
          fontSize={'20px'}
          margin={'15px 0px 0px 0px'}
          fontColor={'var(--text-primary)'}
        >
          Principais habilidades :
        </Label>
        <Knowledges knowList={knowList} />
      </RightContent>
    </Content>
  );
};

export default About;
