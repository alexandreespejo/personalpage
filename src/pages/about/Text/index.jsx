import { Spring } from 'react-spring/renderprops';
import { Text } from '../../../styles/aboutText';
const Label = ({ children, fontSize, margin, opacity, fontColor }) => {
  return (
    <Spring
      from={{ opacity: 0, transform: 'translate3d(0,200px,0)' }}
      to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      config={{ delay: 250 }}
    >
      {(props) => (
        <Text
          fontSize={fontSize}
          fontColor={fontColor}
          style={props}
          margin={margin}
          opacity={opacity}
        >
          {children}
        </Text>
      )}
    </Spring>
  );
};
export default Label;
