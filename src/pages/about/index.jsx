import HardSkills from './hardSkills';
import SoftSkill from './softSkills';
import { Content, Division } from '../../styles/about';
import Card from './card';
const About = () => {
  return (
    <Content>
      <Division>
        <HardSkills />
      </Division>
      <Division>
        <SoftSkill />
      </Division>

      <Division>
        <Card />
      </Division>
    </Content>
  );
};

export default About;
