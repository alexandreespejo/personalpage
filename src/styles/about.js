import styled from 'styled-components';

export const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  transition: all 0.6s linear;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    overflow-y: auto;
    overflow-x: hidden;
    grid-template-areas: 'hS sS' 'card card';
    main:last-child {
      grid-area: card;
    }
  }
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
    overflow-x: hidden;
  }
  width: 100%;
  height: 100%;
`;
export const Division = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
