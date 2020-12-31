import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.header)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.showMenu ? 'space-between' : 'start')};
  height: 60px;
  transition: all 0.25s linear;
`;

export const Division = styled(animated.div)`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;
