import styled from 'styled-components';
import { animated } from 'react-spring';
export const Main = styled(animated.main)`
  /* display: ${(props) => (props.isActive ? 'flex' : 'none')}; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 60%;
  border-radius: 20px;
  background: ${(props) => props.theme.secondary};
`;
