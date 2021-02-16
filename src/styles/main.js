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
  margin-top: 9vh;
  width: 100%;
  height: 91vh;
`;
