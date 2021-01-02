import styled from 'styled-components';
export const Title = styled.div`
  label {
    background: -webkit-linear-gradient(
      62deg,
      var(--button-primary) 0%,
      rgba(253, 187, 45, 0.8) 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 40px;
  color: var(--text-primary);
`;
export const Content = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) => (props.justify ? props.justify : 'none')};
  -webkit-box-shadow: ${(props) =>
    props.shadow ? '12px 12px 16px -3px rgba(0, 0, 0, 0.2)' : 'none'};
  box-shadow: ${(props) =>
    props.shadow ? '12px 12px 16px -3px rgba(0, 0, 0, 0.2)' : 'none'};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  width: ${(props) => (props.width ? props.width : '1000px')};
  height: ${(props) => (props.height ? props.height : '500px')};
`;
export const Division = styled.div`
  a {
    margin-left: 10px;
    text-decoration: none;
    color: var(--text-primary);
    :hover {
      color: var(--button-primary);
    }
    font-size: 20px;
    font-weight: bold;
  }
  label {
    margin-left: 10px;
    text-decoration: none;
    color: var(--text-primary);
    font-size: 20px;
    font-weight: bold;
  }
  display: ${(props) => (props.display ? props.display : 'flex')};
  align-items: center;
  margin-top: ${(props) => (props.margin ? props.margin : '20px')};
  width: ${(props) => (props.width ? props.width : '300px')};
`;
export const Image = styled.img`
  justify-self: initial;
  width: ${(props) => (props.width ? props.width : 'auto')};
`;
