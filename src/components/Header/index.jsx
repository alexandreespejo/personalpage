/* eslint no-eval: 0 */
import { useState, useEffect, useContext } from 'react';
import { TabContext } from '../../contexts/tab';
import { Container, Division } from '../../styles/header';
import Button from '../Button';
import { IoIosArrowForward } from 'react-icons/io';
const Header = () => {
  const { setActivePage, activePage } = useContext(TabContext);
  const [isShowMenu, setIsShowMenu] = useState(
    sessionStorage.getItem('isShowTabs') === null
      ? false
      : eval(sessionStorage.getItem('isShowTabs'))
  );
  useEffect(() => sessionStorage.setItem('isShowTabs', isShowMenu), [
    isShowMenu,
  ]);
  return (
    <>
      <Button
        width={'60px'}
        height={'60px'}
        fontSize={'36px'}
        zIndex={99}
        active={true}
        color={'var(--button-primary)'}
        invert={isShowMenu}
        isArrow={true}
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
            isOption={true}
            isSelected={activePage === 0}
          >
            Sobre
          </Button>
          <Button
            onClick={() => setActivePage(1)}
            colorHover={true}
            isOption={true}
            isSelected={activePage === 1}
            active={true}
          >
            Projetos
          </Button>
          <Button
            onClick={() => setActivePage(2)}
            colorHover={true}
            isOption={true}
            isSelected={activePage === 2}
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
