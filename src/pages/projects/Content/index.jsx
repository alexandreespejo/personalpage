import { useTransition } from 'react-spring';
import { Main } from './style';
const Content = ({ contentList, active }) => {
  const transitions = useTransition(active, (p) => p, {
    from: { opacity: 0, width: '0%', height: '0%' },
    enter: { opacity: 1, width: '80%', height: '60%' },
    leave: { opacity: 0, width: '0%', height: '0%' },
  });
  return (
    <>
      {transitions.map(({ item, props, key }) => {
        return (
          <Main key={key} {...props} style={props}>
            {contentList[item]}
          </Main>
        );
      })}
    </>
  );
};
export default Content;
