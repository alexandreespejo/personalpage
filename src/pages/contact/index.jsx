import Main from '../main';
import { config, Spring } from 'react-spring/renderprops';
import { Title, Content, Division, Image } from './style';
import contactSvg from '../../assets/notifications.svg';
const Contact = () => {
  return (
    <Main>
      <Spring from={{ opacity: 0, height: 0 }} to={{ opacity: 1, height: 500 }}>
        {(props) => (
          <Content column={true} style={props}>
            <Title>Onde você pode me encontrar :</Title>
            <Content width={'100%'} height={'90%'} background={'transparent'}>
              <Content
                width={'50%'}
                height={'100%'}
                column={true}
                justify={'center'}
              >
                <Division>
                  <Image src="https://img.icons8.com/color/48/000000/linkedin.png" />
                  <a href="https://www.linkedin.com/in/alexandre-espejo/">
                    Linkedin
                  </a>
                </Division>
                <Division>
                  <Image src="https://img.icons8.com/material-sharp/48/000000/github.png" />
                  <a href="https://github.com/alexandreespejo">Github</a>
                </Division>
                <Division>
                  <Image src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
                  <a href="https://www.instagram.com/alexandre_espejo/">
                    Instagram
                  </a>
                </Division>

                <Division>
                  <Image src="https://img.icons8.com/color/48/000000/gmail--v2.png" />
                  <label>alexandre.espejo@unesp.com</label>
                </Division>
              </Content>
              <Content
                width={'50%'}
                height={'100%'}
                column={true}
                justify={'center'}
              >
                <Image src={contactSvg} width={'300px'} />
              </Content>
            </Content>
          </Content>
        )}
      </Spring>
    </Main>
  );
};

export default Contact;
