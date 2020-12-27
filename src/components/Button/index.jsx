import { Container } from './style';

const Button = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Button;
