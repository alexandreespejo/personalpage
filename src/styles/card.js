import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 30% 60%;
  height: 550px;
  width: min(80vw, 320px);
  background: var(--page-primary-light);
  border: 1px solid var(--text-primary);
  border-radius: 10px;
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;
export const Name = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  width: 100%;
  height: 100%;
  text-align: center;
  border-bottom: 1px solid var(--text-primary);
  svg {
    font-size: 20px;
  }
`;
export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--text-primary);
  img {
    max-height: 160px;
    border-radius: 50%;
    opacity: 0.9;
  }
`;
export const Desc = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  width: 100%;
  height: 100%;
  div {
    svg:first-child {
      font-size: 20px;
    }
    h3 {
      margin-left: 2px;
    }
    p {
      justify-content: center;
      margin: 10%;
      color: var(--text-secondary);
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    label:first-child {
      margin-left: 2px;
    }
  }
`;
