import Icon from '../../components/ProfileIcon';
import { useSpring, animated } from 'react-spring';
import { RightContent, LeftContent, Content } from '../../styles/about';
import { aboutContent } from './aboutData';
import Knowledges from './AnimatedKnows';
import Label from './Text';
const About = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,200px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { delay: 300 },
  });
  return (
    <Content>
      <LeftContent>
        <animated.h1 style={animation}>{aboutContent.title}</animated.h1>
        <Label fontSize={'20px'} fontColor={'rgba(179, 171, 154,0.5)'}>
          {aboutContent.descripition}
        </Label>
        <Label
          fontSize={'18px'}
          fontColor={'var(--text-secondary)'}
          margin={'50px 0px 0px 0px '}
        >
          {aboutContent.text}
        </Label>
      </LeftContent>
      <RightContent>
        <Icon iconWidth={'200px'} children={aboutContent.image} />
        <Label
          fontSize={'20px'}
          margin={'15px 0px 0px 0px'}
          fontColor={'var(--text-primary)'}
        >
          Principais habilidades :
        </Label>
        <Knowledges />
      </RightContent>
    </Content>
  );
};

export default About;
