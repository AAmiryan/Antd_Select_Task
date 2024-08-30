import React, { useRef, useState } from 'react';

import '../styled/style.css';
import useOutsideClick from '../hooks/useOutsideClick';
import { Option, ISelectProps } from '../types';

import Dropdown from './Dropdown';
import DefaultLabel from './DefaultLabel';

const Select = <T,>({
  options,
  mode = 'single',
  customLabel,
  customDropdown,
  onChange,
  placeholder = 'Select...',
  isSearchable = false,
  label,
}: ISelectProps<T>) => {
  const [selectedOptions, setSelectedOptions] = useState<Option<T>[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const selectRef = useRef<HTMLDivElement>(null);

  useOutsideClick(selectRef, () => setIsOpen(false));

  const toggleDropdown = () => {
    setIsOpen(true);
  };

  const handleSelect = (option: Option<T>) => {
    let newSelectedOptions;
    if (mode === 'single') {
      newSelectedOptions = [option];
      setIsOpen(false);
    } else {
      newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((o) => o !== option)
        : [...selectedOptions, option];
    }
    setSelectedOptions(newSelectedOptions);
    onChange(mode === 'single' ? option : newSelectedOptions);
    setSearchValue('');
    if (mode === 'multiple' && searchValue) {
      options.push({
        label: searchValue,
        value: searchValue as T,
      });
    }
    setFilteredOptions(options);
  };

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    if (isSearchable) {
      const filtered = options.filter((option) => option.label.toLowerCase().includes(value.toLowerCase()));
      if (mode === 'multiple') {
        if (!filtered.find(({ label }) => label === value)) {
          filtered.unshift({
            label: value,
            value: value as T,
          });
        }
      }
      setFilteredOptions(filtered);
    }
  };

  return (
    <div className='select-component' ref={selectRef}>
      {label && <div className='select-label'>{label}</div>}
      <div className={`select-input ${isOpen ? 'focused' : ''}`} onClick={toggleDropdown}>
        <div className='selected-options'>
          {selectedOptions.map((option) =>
            customLabel ? (
              customLabel(option, () => handleSelect(option))
            ) : (
              <DefaultLabel
                key={option.value as string}
                option={option as Option<string>}
                onRemove={() => handleSelect(option)}
                mode={mode}
              />
            ),
          )}
          {isSearchable ? (
            <input
              type='text'
              className='text-input'
              value={searchValue}
              onChange={handleChangeSearchValue}
              placeholder={selectedOptions.length ? '' : placeholder}
            />
          ) : selectedOptions.length ? (
            ''
          ) : (
            placeholder
          )}
        </div>
      </div>
      {isOpen && (
        <>
          {customDropdown ? (
            <div className='dropdown'>{customDropdown(filteredOptions, selectedOptions, handleSelect)} </div>
          ) : (
            <>
              <Dropdown options={filteredOptions} selectedOptions={selectedOptions} onSelect={handleSelect} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Select;
