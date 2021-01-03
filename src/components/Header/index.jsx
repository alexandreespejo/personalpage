/* eslint no-eval: 0 */
import { useState, useEffect, useContext } from 'react';
import { TabContext } from '../../contexts/tab';
import { Container, Division } from './style';
import { useSpring } from 'react-spring';
import Button from '../Button';
import { IoIosArrowForward } from 'react-icons/io';
const Header = () => {
  const { setActivePage } = useContext(TabContext);
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
      <Container isShowMenu={isShowMenu}>
        <Division>
          <Button
            onClick={() => setActivePage(0)}
            colorHover={true}
            active={true}
          >
            Sobre
          </Button>
          <Button
            onClick={() => setActivePage(1)}
            colorHover={true}
            active={true}
          >
            Projetos
          </Button>
          <Button
            onClick={() => setActivePage(2)}
            colorHover={true}
            active={true}
          >
            Contato
          </Button>
        </Division>
      </Container>
    </>
  );
};

export default Header;
