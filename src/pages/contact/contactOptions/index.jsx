import { useContext } from 'react';
import { TabContext } from '../../../contexts/tab';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiTwotoneMail,
} from 'react-icons/ai';
import { Content } from '../../../styles/contactOptions';
const ContactOptions = () => {
  const { setIsVisible } = useContext(TabContext);
  return (
    <Content>
      <a
        href="https://github.com/alexandreespejo"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <AiFillGithub />
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/alexandre-espejo/"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <AiFillLinkedin />
        </button>
      </a>
      <a
        href="https://www.instagram.com/alexandre_espejo/"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <AiFillInstagram />
        </button>
      </a>
      <button onClick={() => setIsVisible(true)}>
        <AiTwotoneMail />
      </button>
    </Content>
  );
};
export default ContactOptions;
