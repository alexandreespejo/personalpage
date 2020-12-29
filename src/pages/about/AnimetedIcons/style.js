import styled from 'styled-components';
import { animated } from 'react-spring';
export const Icon = styled(animated.img)`
  align-self: center;
  margin-top: 20px;
  width: ${(props) => props.iconWidth};
  height: ${(props) => props.iconWidth};
  border-radius: 50%;
`;
