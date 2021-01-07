import { Spring } from 'react-spring/renderprops';
import { Knowledges, KnowCard } from '../../../styles/aboutAniKnows';
import { knowList } from '../aboutData';
const AnimatedKnows = () => {
  return (
    <Spring
      from={{ opacity: 0, transform: 'translate3d(0,200px,0)' }}
      to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      config={{ delay: 300 }}
    >
      {(props) => (
        <Knowledges style={props}>
          {knowList.map((item, index) => {
            return (
              <Spring
                key={index}
                from={{
                  opacity: 0,
                  transform: 'translate3d(40%,0,0) ',
                }}
                to={{
                  opacity: 1,
                  transform: 'translate3d(0,0,0) ',
                }}
                config={{ delay: 110 * ((index + 1) * 2) }}
              >
                {(props) => (
                  <KnowCard style={props}>
                    <img src={item.src} />
                    <label>{item.name}</label>
                  </KnowCard>
                )}
              </Spring>
            );
          })}
        </Knowledges>
      )}
    </Spring>
  );
};
export default AnimatedKnows;
