import { useTransition } from 'react-spring';
import { Main, Title } from './style';
const Content = ({ contentList, active }) => {
  const transitions = useTransition(active, (p) => p, {
    from: { opacity: 0, width: 0, height: 0 },
    enter: { opacity: 1, width: 1200, height: 500 },
    leave: { opacity: 0, width: 0, height: 0 },
  });
  return (
    <>
      {transitions.map(({ item, props, key }) => {
        return (
          <Main key={key} {...props} style={props}>
            <Title>{contentList[item]}</Title>
          </Main>
        );
      })}
    </>
  );
};
export default Content;
