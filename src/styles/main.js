import styled from 'styled-components';
export const Mother = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--page-primary);
  overflow: hidden;
`;
export const Content = styled.main`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 60px);
`;
