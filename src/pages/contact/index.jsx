import { useContext } from 'react';
import { Container } from '../../styles/contact';
import Options from './contactOptions';
import Stars from './starsRain';
import Form from './form';

import { TabContext } from '../../contexts/tab';
const Contact = () => {
  const { isVisible } = useContext(TabContext);
  return (
    <>
      <Container>
        <Options />
      </Container>
      <Stars />
      <Form isVisible={isVisible} />
    </>
  );
};

export default Contact;
