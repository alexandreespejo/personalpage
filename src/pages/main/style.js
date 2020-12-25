import styled from 'styled-components';
export const Mother = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
`;
export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 60px);
`;
