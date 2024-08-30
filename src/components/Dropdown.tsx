import SelectedIco from '../icons/box.svg';
import { IDropdownProps } from '../types';

const Dropdown = <T,>({ options, selectedOptions, onSelect }: IDropdownProps<T>) => {
  return (
    <div className='dropdown'>
      {options.length === 0 ? (
        <div>No options available</div>
      ) : (
        options.map((option) => (
          <div
            key={option.value as string}
            className={`option ${selectedOptions.some((sel) => sel.value === option.value) ? 'selected' : ''}`}
            onClick={() => onSelect(option)}
          >
            <div className='option-wrapper'>
              {option.avatar && <img className='option-icon' src={option.avatar} />}
              <span>{option.label}</span>
            </div>
            {selectedOptions.some((sel) => sel.value === option.value) && <SelectedIco />}
          </div>
        ))
      )}
    </div>
  );
};

export default Dropdown;
