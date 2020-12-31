import Main from '../main';
import Icon from '../../components/ProfileIcon';
import { RightContent, LeftContent, Content } from './style';
import Knowledges from './AnimatedKnows';
import Label from './Text';
const About = () => {
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
    <Main>
      <Content>
        <LeftContent>
          <Label fontSize={'40px'} fontColor={'var(--text-primary)'}>
            Alexandre Espejo
          </Label>
          <Label
            fontSize={'12px'}
            fontMargin={'-30px 0 30px 0'}
            fontColor={'rgba(138, 135, 143, 0.87)'}
          >
            Desde 2001
          </Label>
          <Label
            fontSize={'18px'}
            fontMargin={'0 0 0 15px'}
            fontColor={'var(--text-secondary)'}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mollit culpa exercitation officia ut
            aliquip nostrud pariatur velit elit ipsum. In anim ipsum do
            reprehenderit do in fugiat. Excepteur laboris et ex reprehenderit
            mollit sint dolore aliqua voluptate minim. Aliquip dolore
            adipisicing excepteur exercitation et dolore anim Pariatur in anim
            pariatur sunt. Proident irure dolor anim tempor veniam nostrud anim
            pariatur excepteur exercitation tempor. Dolor et aute adipisicing
            enim magna ea enim laborum eu voluptate cillum cillum exercitation
            pariatur. Adipisicing exercitation laboris nulla anim. Mollit nulla
            dolore eu sint adipisicing aliquip duis ad reprehenderit incididunt
            nulla qui aliqua. Consectetur dolor veniam minim incididunt ex
            ullamco non cupidatat nisi deserunt do adipisicing ad Amet ipsum
            deserunt excepteur labore dolor minim. Ut commodo duis aliquip
            voluptate eu nostrud officia cupidatat. Est tempor voluptate ipsum
            irure ad in eu commodo et excepteur est amet. Dolore fugiat
            incididunt voluptate reprehenderit non esse. Fugiat cupidatat in
            aliquip anim. Laboris incididunt ullamco quis fugiat reprehenderit
            cillum auteerunt excepteur labore dolor minim. Ut commodo duis
            aliquip voluptate eu nostrud officia cupidatat. Est tempor voluptate
            ipsum irure ad in eu commodo et excepteur est amet. Dolore fugiat
            incididunt voluptate reprehenderit non esse. Fugiat cupidatat in
            aliquip anim. Laboris incididunt ullamco quis fugiat reprehenderit
            cillum aute.
          </Label>
        </LeftContent>
        <RightContent>
          <Icon iconWidth={'200px'} children={img} />
          <Label
            fontSize={'20px'}
            fontMargin={'20px 0 0 0'}
            fontColor={'var(--text-primary)'}
          >
            Principais habilidades :
          </Label>
          <Knowledges knowList={knowList} />
        </RightContent>
      </Content>
    </Main>
  );
};

export default About;
