import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  width: min(1000px, 90vw);
  height: 400px;
  grid-template-columns: 33% 33% 34%;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    'title title title'
    'image image image'
    'link link none';
  margin-top: -60px;
  border-radius: 20px;
  transition: all 0.4s linear;
  @media (max-width: 890px) {
    height: auto;
    max-height: 80vh;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 40px;
  background-color: var(--page-primary-light);
  grid-area: title;
  -webkit-box-shadow: 12px 12px 16px -3px rgba(0, 0, 0, 0.2);
  box-shadow: 12px 12px 16px -3px rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 40px 40px 0px 0px;
  -moz-border-radius: 40px 40px 0px 0px;
  border-radius: 40px 40px 0px 0px;
  svg {
    color: var(--button-primary);
    font-size: 24px;
    margin-left: 2px;
  }
  h2 {
    color: var(--button-primary);
    background: -webkit-linear-gradient(
      62deg,
      var(--button-primary) 0%,
      rgba(253, 187, 45, 0.8) 100%
    );
    background-clip: text;
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
`;
export const Text = styled.div`
  display: flex;
  background-color: var(--page-primary-light);
  z-index: 9;
  height: 200px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  text-align: justify;
  -webkit-box-shadow: 12px 12px 16px -3px rgba(0, 0, 0, 0.8);
  box-shadow: 12px 12px 16px -3px rgba(0, 0, 0, 0.8);
  p {
    max-width: 80%;
    color: var(--text-primary);
  }
`;
export const Link = styled.div`
  grid-area: link;
  display: flex;
  max-height: 40px;
  align-items: center;
  background-color: var(--page-primary-light);
  justify-content: space-around;
  -webkit-border-radius: 0px 0px 40px 40px;
  -moz-border-radius: 0px 0px 40px 40px;
  border-radius: 0px 0px 40px 40px;
`;
export const Image = styled.div`
  grid-area: image;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 890px) {
    flex-direction: column;
    div {
      p {
        max-width: 90%;
        color: var(--text-secondary);
      }
      max-height: 120px;
      -webkit-box-shadow: none;
      box-shadow: none;
      -moz-border-radius: 0px 0px 40px 0px;
      border-radius: 0px 0px 40px 0px;
    }
  }
  img {
    max-height: 100%;
    @media (max-width: 890px) {
      max-height: calc(100% - 120px);
      max-width: 100%;
    }
  }
`;
