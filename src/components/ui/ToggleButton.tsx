import { useEffect, useRef, type FC } from 'react';
import './ToggleButton.css';

type Props = {
  mark: string;
  func: () => void;
};

const ToggleButton: FC<Props> = ({ mark, func }) => {
  const indicator = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (indicator.current) {
      indicator.current.style.fontSize = mark.length >= 2 ? '13px' : '16px';
    }
  }, [mark]);

  return (
    <div className="toggleButton">
      <label className="label">
        <input className="toggle-state" type="checkbox" name="check" value="check" />
        <div className="indicator" ref={indicator} onClick={func}>
          {mark}
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
