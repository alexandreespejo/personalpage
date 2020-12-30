import styled from 'styled-components';
import { animated } from 'react-spring';

export const Main = styled(animated.main)`
  /* display: ${(props) => (props.isActive ? 'flex' : 'none')}; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -60px;
  border-radius: 20px;
  background: ${(props) => props.theme.secondary};
`;

export const Title = styled.label`
  font-size: 30px;
`;
