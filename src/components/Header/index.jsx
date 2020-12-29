import { useState, useEffect } from 'react';
import { Container, Division } from './style';
import { useSpring } from 'react-spring';
import Button from '../Button';
import ToggleButton from '../ToggleButton';
import { IoIosArrowForward } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(
    sessionStorage.getItem('isShowTabs') || false
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
        invert={isShowMenu}
        position={'absolute'}
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        <IoIosArrowForward />
      </Button>
      <Division show={isShowMenu}>
        <Button as={NavLink} to="/">
          Sobre
        </Button>
        <Button as={NavLink} to="/projects">
          Projetos
        </Button>
        <Button as={NavLink} to="/contact">
          Contato
        </Button>
        <ToggleButton />
      </Division>
    </Container>
  );
};

export default Header;
