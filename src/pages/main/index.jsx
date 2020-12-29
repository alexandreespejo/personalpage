import { Mother, Content } from './style';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
function Main({ children }) {
  var dark = {
    primary: 'rgb(26, 26, 29)',
    secondary: 'rgba(51, 49, 56, 0.87)',
    colorHover: 'rgba(83, 230, 228, 0.87)',
    colorButton: 'rgba(250, 250, 250, 0.87)',
  };
  window.addEventListener('click', () => {});
  return (
    <ThemeProvider theme={dark}>
      <Mother>
        <Header>{['Sobre', 'Projetos', 'Contato']}</Header>
        <Content>{children}</Content>
      </Mother>
    </ThemeProvider>
  );
}
export default Main;
