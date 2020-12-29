import Main from '../main';
import Icon from '../../components/ProfileIcon';
import { RightContent, LeftContent, Content } from './style';
import Label from './Text';
const About = () => {
  const img =
    'https://avatars1.githubusercontent.com/u/62163105?s=460&u=5b60edb54072941138b7861e3acefd621c01a039&v=4';
  return (
    <Main>
      <Content>
        <LeftContent>
          <Label fontSize={'40px'} fontColor={'#80F2EB'}>
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
            fontColor={'rgba(218, 219, 221, 0.87)'}
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
            fontColor={'rgba(218, 219, 221, 0.87)'}
          >
            Conhecimentos :
          </Label>
        </RightContent>
      </Content>
    </Main>
  );
};

export default About;
