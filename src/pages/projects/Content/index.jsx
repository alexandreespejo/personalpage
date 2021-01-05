import { useTransition, useSpring, animated } from 'react-spring';
import { Main, Title, Text, Link, Image } from './style';
import Button from '../../../components/Button';
import { AiOutlineLink, BiMeteor } from 'react-icons/all';
const Content = ({ contentList, active }) => {
  const transitions = useTransition(active, (p) => p, {
    from: { opacity: 0, width: 0, height: 0 },
    enter: { opacity: 1, width: 1000, height: 400 },
    leave: { opacity: 0, width: 0, height: 0 },
  });

  return (
    <>
      {transitions.map(({ item, props, key }) => {
        return (
          <Main key={key} {...props} style={props}>
            <Title>
              <h2>
                {contentList[item]?.name + '  '}
                <BiMeteor />
              </h2>
            </Title>

            <Link>
              {contentList[item].links?.map((link, index) => {
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
              <img src={contentList[item]?.picture} />
              <Text>
                <p>{contentList[item]?.descripition}</p>
              </Text>
            </Image>
          </Main>
        );
      })}
    </>
  );
};
export default Content;
