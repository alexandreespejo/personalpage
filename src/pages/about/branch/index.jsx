import { Group, Branch } from '../../../styles/branch';
import { AiFillLock } from 'react-icons/ai';
import { useState } from 'react';
const BranchComponent = ({
  unlocked,
  top,
  right,
  bottom,
  left,
  icon,
  invisible,
  desc,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Group
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      unlocked={unlocked}
      invisible={invisible}
    >
      <Branch
        unlocked={unlocked}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span>
          <span>{unlocked ? isHover ? desc : icon : <AiFillLock />}</span>
        </span>
      </Branch>
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
    </Group>
  );
};

export default BranchComponent;
