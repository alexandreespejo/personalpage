import { Main, Title, Text, Link, Image } from '../../../styles/projectContent';
import Button from '../../../components/Button';
import { AiOutlineLink, GiStarsStack } from 'react-icons/all';
const Content = ({ contentList, active }) => {
  return (
    <>
      <Main>
        <Title>
          <h2>{contentList[active]?.name + '  '}</h2>
          <GiStarsStack />
        </Title>

        <Link>
          {contentList[active].links &&
            contentList[active].links.map((link, index) => {
              return (
                <Button
                  key={index}
                  as="a"
                  href={link.src}
                  colorHover={true}
                  active={true}
                  color={' var(--text-primary)'}
                  target="blank"
                >
                  {<AiOutlineLink />}
                  {link.name + ' '}
                </Button>
              );
            })}
        </Link>
        <Image>
          <img src={contentList[active]?.picture} alt="icone" />
          <Text>
            <p>{contentList[active]?.descripition}</p>
          </Text>
        </Image>
      </Main>
    </>
  );
};
export default Content;
