import emailjs from 'emailjs-com';
import { useContext, useEffect, useState } from 'react';
import { FaWindowClose, FaRegCheckCircle } from 'react-icons/fa';
import { TabContext } from '../../../contexts/tab';
import { Container } from '../../../styles/form';

const Form = ({ isVisible }) => {
  const { setIsVisible } = useContext(TabContext);
  const [isActive, setIsActive] = useState(false);
  const [isAnimationPaused, setIsAnimationPaused] = useState(true);
  const [fieldValues, setFieldValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  useEffect(() => {
    if (isAnimationPaused === false)
      setTimeout(() => setIsAnimationPaused(true), 4000);
  }, [isAnimationPaused]);
  useEffect(() => setIsActive(buttonState(fieldValues)), [fieldValues]);
  const buttonState = (fields) => {
    if (
      fields.user_name === '' ||
      fields.user_email === '' ||
      fields.message === ''
    )
      return false;
    return true;
  };
  const updateValues = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let array = { ...fieldValues };
    array[name] = value;
    setFieldValues(array);
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_jhwwtqi',
        'template_pu5dgri',
        e.target,
        'user_5MkHsWylUwawMyuJsBJCJ'
      )
      .then(
        (result) => {
          setFieldValues({
            user_name: '',
            user_email: '',
            message: '',
          });
          setIsAnimationPaused(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Container isVisible={isVisible} isAnimationPaused={isAnimationPaused}>
      <FaWindowClose onClick={() => setIsVisible(false)} />
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="user_name"
            id="name"
            onChange={(e) => updateValues(e)}
            value={fieldValues.user_name}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            id="email"
            onChange={(e) => updateValues(e)}
            value={fieldValues.user_email}
          />
        </div>
        <div>
          <label>Mensagem</label>
          <textarea
            name="message"
            id="message"
            onChange={(e) => updateValues(e)}
            value={fieldValues.message}
          />
        </div>
        {isActive ? (
          <button type="submit">Enviar</button>
        ) : (
          <button type="submit" disabled>
            Enviar
          </button>
        )}
      </form>
      <footer>
        <div>
          <span>
            <FaRegCheckCircle />
          </span>
          <p>Mensagem Enviada !</p>
        </div>
      </footer>
    </Container>
  );
};
export default Form;
