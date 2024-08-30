import '../styled/style.css';
import RemoveIcon from '../icons/remove.svg';
import { IDefaultLabelProps } from '../types/';

const DefaultLabel: React.FC<IDefaultLabelProps> = ({ option, onRemove, mode }) => {
  return (
    <>
      {mode === 'single' ? (
        <div className='single-label'>{option.label}</div>
      ) : (
        <div className='label'>
          {option.avatar && <img className='option-icon' src={option.avatar} />}
          <span className='label-text'>{option.label}</span>
          <button className='label-remove' onClick={onRemove}>
            <RemoveIcon />
          </button>
        </div>
      )}
    </>
  );
};

export default DefaultLabel;
