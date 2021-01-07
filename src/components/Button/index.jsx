import { Container } from '../../styles/button';

const Button = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Button;
