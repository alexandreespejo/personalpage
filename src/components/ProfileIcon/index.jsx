import { Spring } from 'react-spring/renderprops';
import { Icon } from '../../styles/profileIcon';
const ProfileIcon = ({ children, iconWidth }) => {
  return (
    <Spring
      from={{
        opacity: 0,
        transform: 'translate3d(0,120%,0)',
      }}
      to={{
        opacity: 1,
        transform: 'translate3d(0px,0,0)',
        boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
      }}
      config={{ delay: 200 }}
    >
      {(props) => (
        <Icon src={children} iconWidth={iconWidth || '300px'} style={props} />
      )}
    </Spring>
  );
};
export default ProfileIcon;
