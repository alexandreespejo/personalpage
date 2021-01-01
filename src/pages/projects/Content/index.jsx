import { useTransition } from 'react-spring';
import { Main, Title, Text, Link, Image } from './style';
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
              <h2>{contentList[item]?.name}</h2>
            </Title>
            <Text>
              <p>{contentList[item]?.descripition}</p>
            </Text>
            <Link>
              {contentList[item].links?.map((link) => {
                return <a href={link.src}>{link.name}</a>;
              })}
            </Link>
            <Image>
              <img src={contentList[item]?.picture} alt="pic" />
            </Image>
          </Main>
        );
      })}
    </>
  );
};
export default Content;
