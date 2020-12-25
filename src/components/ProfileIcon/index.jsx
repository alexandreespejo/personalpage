import { Icon } from './style';
const ProfileIcon = ({ children, iconWidth }) => {
  return <Icon src={children} iconWidth={iconWidth || '300px'} />;
};
export default ProfileIcon;
