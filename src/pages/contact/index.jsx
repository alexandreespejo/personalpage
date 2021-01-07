import { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import { Title, Content, Division, Image } from '../../styles/contact';
const Contact = () => {
  const [hover, setHover] = useState(false);
  const changeHover = () => setHover(!hover);
  return (
    <Spring
      from={{ opacity: 0, height: '0%', transform: 'rotateX(90deg)' }}
      to={{
        opacity: 1,
        height: hover ? '90%' : '0%',
        transform: hover ? 'rotateX(0deg)' : 'rotateX(90deg)',
      }}
      config={{ duration: 300 }}
    >
      {(props) => (
        <Content
          column={true}
          justify={'center'}
          onMouseOver={() => changeHover()}
          onMouseOut={() => changeHover()}
        >
          <Title>
            <label>Onde você pode me encontrar :</label>
          </Title>
          <Content
            width={'100%'}
            height={'90%'}
            background={'transparent'}
            style={props}
          >
            <Content
              width={'100%'}
              height={'100%'}
              column={true}
              justify={'center'}
            >
              <Division>
                <Image src="https://img.icons8.com/color/48/000000/linkedin.png" />
                <a
                  href="https://www.linkedin.com/in/alexandre-espejo/"
                  target="blank"
                >
                  Linkedin
                </a>
              </Division>
              <Division>
                <Image src="https://img.icons8.com/material-sharp/48/000000/github.png" />
                <a href="https://github.com/alexandreespejo" target="blank">
                  Github
                </a>
              </Division>
              <Division>
                <Image src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
                <a
                  href="https://www.instagram.com/alexandre_espejo/"
                  target="blank"
                >
                  Instagram
                </a>
              </Division>

              <Division>
                <Image src="https://img.icons8.com/color/48/000000/gmail--v2.png" />
                <label>alexandre.espejo@unesp.br</label>
              </Division>
            </Content>
          </Content>
        </Content>
      )}
    </Spring>
  );
};

export default Contact;
