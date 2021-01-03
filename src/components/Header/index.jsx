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
    transform: isShowMenu ? 'translate3d(0,0,0)' : 'translate3d(-100%,0,0)',
  });
  return (
    <>
      <Button
        width={'60px'}
        height={'60px'}
        fontSize={'36px'}
        zIndex={9}
        active={true}
        colorHover={true}
        invert={isShowMenu}
        position={'absolute'}
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        {' '}
        <IoIosArrowForward />
      </Button>
      <Container showMenu={isShowMenu} style={animationContainer}>
        <Division show={isShowMenu}>
          <Button
            as={NavLink}
            to="/personalpage/"
            colorHover={true}
            active={true}
          >
            Sobre
          </Button>
          <Button
            as={NavLink}
            to="/personalpage/projects"
            colorHover={true}
            active={true}
          >
            Projetos
          </Button>
          <Button
            as={NavLink}
            to="/personalpage/contact"
            colorHover={true}
            active={true}
          >
            Contato
          </Button>
          {/* <ToggleButton /> */}
        </Division>
      </Container>
    </>
  );
};

export default Header;
