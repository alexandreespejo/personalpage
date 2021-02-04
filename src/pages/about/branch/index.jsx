import { Group, Branch } from '../../../styles/branch';
import { AiFillLock } from 'react-icons/ai';
const BranchComponent = ({
  unlocked,
  top,
  right,
  bottom,
  left,
  icon,
  invisible,
}) => {
  return (
    <Group
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      unlocked={unlocked}
      invisible={invisible}
    >
      <Branch unlocked={unlocked}>
        <span>
          <span>{unlocked ? icon : <AiFillLock />}</span>
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
