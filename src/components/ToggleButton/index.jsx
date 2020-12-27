import { useState } from 'react';
import Button from '../Button';
import { FaMoon, FaSun } from 'react-icons/fa';
const ToggleButton = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <Button onClick={() => setIsToggled(!isToggled)} width={'60px'}>
      {isToggled ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

export default ToggleButton;
