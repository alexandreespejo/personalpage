/* eslint no-eval: 0 */
import { useState, useEffect } from 'react';
import { Container, Division } from './style';
import { useSpring } from 'react-spring';
import Button from '../Button';
import ToggleButton from '../ToggleButton';
import { IoIosArrowForward } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(
    sessionStorage.getItem('isShowTabs') === null
      ? false
      : eval(sessionStorage.getItem('isShowTabs'))
  );
  useEffect(() => {
    sessionStorage.setItem('isShowTabs', isShowMenu);
  }, [isShowMenu]);
  const animationContainer = useSpring({
    width: isShowMenu ? '100%' : '4%',
    backgroundColor: isShowMenu ? 'rgba(51, 49, 56, 0.87)' : 'rgb(26, 26, 29)',
  });
  return (
    <Container showMenu={isShowMenu} style={animationContainer}>
      <Button
        width={'60px'}
        height={'60px'}
        fontSize={'36px'}
        active={true}
        colorHover={true}
        invert={isShowMenu}
        position={'absolute'}
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        <IoIosArrowForward />
      </Button>
      <Division show={isShowMenu}>
        <Button as={NavLink} to="/" colorHover={true} active={true}>
          Sobre
        </Button>
        <Button as={NavLink} to="/projects" colorHover={true} active={true}>
          Projetos
        </Button>
        <Button as={NavLink} to="/contact" colorHover={true} active={true}>
          Contato
        </Button>
        {/* <ToggleButton /> */}
      </Division>
    </Container>
  );
};

export default Header;
