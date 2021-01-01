import styled from 'styled-components';
import { animated } from 'react-spring';

export const Main = styled(animated.main)`
  display: grid;
  grid-template-columns: 33% 33% 34%;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    'title title title'
    'image image text'
    'link link text';
  margin-top: -60px;
  border-radius: 20px;
  background: var(--page-secondary);
`;

export const Title = styled.div`
  grid-area: title;
  display: flex;
  align-items: center;
  h1 {
    color: var(--text-primary);
  }
  justify-content: center;
  background: var(--page-secondary);
`;
export const Text = styled.div`
  grid-area: text;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-right: 15px;
    color: var(--text-secondary);
  }
  text-align: justify;
  background: var(--page-secondary);
`;
export const Link = styled.div`
  grid-area: link;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--page-secondary);
`;
export const Image = styled.div`
  grid-area: image;
  display: flex;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  align-items: center;
  justify-content: center;
  background: var(--page-secondary);
`;
