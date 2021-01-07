import styled from 'styled-components';

export const Content = styled.main`
  display: flex;
  align-items: center;
  @media (max-width: 980px) {
    flex-direction: column;
    overflow-y: auto;
  }
  width: 100%;
  height: 100%;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    background: -webkit-linear-gradient(
      62deg,
      var(--button-primary) 0%,
      rgba(253, 187, 45, 0.8) 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    -o-background-clip: text;
    -ms-background-clip: text;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -o-text-fill-color: transparent;
    -ms-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }
  /* @media (max-width: 500px) {
    height: auto;
    width: 100%;
  } */
  width: 40%;
  height: 100%;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
`;
