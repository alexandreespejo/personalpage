import Main from '../main';
import { useState } from 'react';
import { config, Spring } from 'react-spring/renderprops';
import { Title, Content, Division, Image } from './style';
import contactSvg from '../../assets/notifications.svg';
const Contact = () => {
  const [over, setOver] = useState(false);
  return (
    <Main>
      <Spring
        from={{ opacity: 0, height: '0%', transform: 'rotateX(90deg)' }}
        to={{
          opacity: 1,
          height: over ? '90%' : '0%',
          transform: over ? 'rotateX(0deg)' : 'rotateX(90deg)',
        }}
      >
        {(props) => (
          <Content
            column={true}
            justify={'center'}
            onMouseOver={() => {
              setOver(true);
            }}
            onMouseOut={() => {
              setOver(false);
            }}
          >
            <Title>Onde você pode me encontrar :</Title>
            <Content
              width={'100%'}
              height={'90%'}
              background={'transparent'}
              style={props}
            >
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
                <Image src={contactSvg} width={'60%'} />
              </Content>
            </Content>
          </Content>
        )}
      </Spring>
    </Main>
  );
};

export default Contact;
