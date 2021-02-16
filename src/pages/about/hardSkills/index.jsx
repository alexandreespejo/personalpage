import { useState } from 'react';
import { Tree, Container } from '../../../styles/hardSkills';
import Branch from '../branch';
import {
  DiJavascript1,
  FaNodeJs,
  FaReact,
  SiHtml5,
  SiCss3,
  FaGitAlt,
  SiPostgresql,
  FaPython,
} from 'react-icons/all';
const HardSkills = () => {
  const [unlock, setUnlock] = useState(false);
  setTimeout(() => setUnlock(true), 500);
  return (
    <Container>
      <h2>HABILIDADES PRIMÁRIAS</h2>
      <Tree>
        <Branch invisible={true} />
        <Branch
          unlocked={unlock}
          icon={<DiJavascript1 />}
          bottom={true}
          desc={'JavaScript'}
        />
        <Branch invisible={true} />
        <Branch
          unlocked={unlock}
          icon={<FaReact />}
          right={true}
          bottom={true}
          desc={'React.js'}
        />
        <Branch
          unlocked={unlock}
          icon={<FaNodeJs />}
          right={true}
          top={true}
          left={true}
          desc={'Node.js'}
        />
        <Branch left={true} />
        <Branch right={true} top={true} bottom={true} />
        <Branch right={true} left={true} />
        <Branch
          unlocked={unlock}
          icon={<SiCss3 />}
          bottom={true}
          left={true}
          desc={'Css'}
        />
        <Branch
          unlocked={unlock}
          icon={<FaPython />}
          top={true}
          bottom={true}
          desc={'Python'}
        />
        <Branch invisible={true} />
        <Branch unlocked={unlock} icon={<SiHtml5 />} top={true} desc={'Html'} />
        <Branch
          unlocked={unlock}
          icon={<FaGitAlt />}
          top={true}
          right={true}
          desc={'Git'}
        />
        <Branch
          unlocked={unlock}
          icon={<SiPostgresql />}
          left={true}
          desc={'Postgre'}
        />
        <Branch invisible={true} />
      </Tree>
    </Container>
  );
};
export default HardSkills;
