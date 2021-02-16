import { Tree, Container } from '../../../styles/hardSkills';
import Branch from '../branch';
import { SiCsharp, SiCplusplus, SiPhp, SiJava } from 'react-icons/si';
const SoftSkills = () => {
  return (
    <Container>
      <h2>HABILIDADES SECUNDÁRIAS</h2>
      <Tree>
        <Branch invisible={true} />
        <Branch bottom={true} />
        <Branch invisible={true} />
        <Branch invisible={true} />
        <Branch
          right={true}
          top={true}
          bottom={true}
          icon={<SiCsharp />}
          unlocked={true}
          desc={'C#'}
        />
        <Branch
          left={true}
          icon={<SiCplusplus />}
          unlocked={true}
          desc={'C++'}
        />
        <Branch invisible={true} />
        <Branch top={true} bottom={true} />
        <Branch invisible={true} />
        <Branch right={true} icon={<SiJava />} unlocked={true} desc={'Java'} />
        <Branch left={true} top={true} bottom={true} />
        <Branch invisible={true} />
        <Branch invisible={true} />
        <Branch top={true} icon={<SiPhp />} unlocked={true} desc={'Php'} />
        <Branch invisible={true} />
      </Tree>
    </Container>
  );
};
export default SoftSkills;
