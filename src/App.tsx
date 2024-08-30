import React from 'react';

import Select from './components/CustomSelect';
import { Option } from './types';
import { users } from './constants';

const CustomDropdown = (
  filteredOptions: Option<string>[],
  selectedOptions: Option<string>[],
  handleSelect: (option: Option<string>) => void,
) => {
  return (
    <div className='custom-dropdown'>
      {filteredOptions.map((option) => (
        <div
          key={option.value}
          className={`custom-dropdown-item ${selectedOptions.includes(option) ? 'selected' : ''}`}
          onClick={() => handleSelect(option)}
        >
          {option.avatar && (
            <img
              src={option.avatar}
              alt={option.label}
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '32px',
              }}
            />
          )}
          {option.label}
        </div>
      ))}
    </div>
  );
};

const CreateCustomLabel = (option: Option<string>, onRemove: () => void) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
      }}
    >
      {option.label}
      <div onClick={onRemove}>x</div>
    </div>
  );
};

const App: React.FC = () => {
  const handleSelectChange = (selectedValue: Option<string>[] | Option<string>) => {
    console.log('Selected:', selectedValue);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      <Select
        options={users}
        mode='single'
        onChange={handleSelectChange}
        placeholder='Select a person'
        isSearchable={false}
        label='Single'
      />
      <Select
        options={users}
        mode='multiple'
        onChange={handleSelectChange}
        placeholder='Select a person'
        isSearchable={false}
        label='Multiple'
      />
      <Select
        options={users}
        mode='single'
        onChange={handleSelectChange}
        placeholder='Select a person'
        isSearchable={true}
        label='Singe and searchable'
      />
      <Select
        options={users}
        mode='multiple'
        onChange={handleSelectChange}
        placeholder='Select a person'
        isSearchable={true}
        label='Multiple and searchable'
      />
      <Select
        options={users}
        mode='single'
        onChange={handleSelectChange}
        placeholder='Select a person'
        isSearchable={false}
        label='Custom single'
        customLabel={CreateCustomLabel}
        customDropdown={CustomDropdown}
      />
      <Select
        options={users}
        mode='multiple'
        onChange={handleSelectChange}
        placeholder='Select a person'
        isSearchable={false}
        label='Custom multiple'
        customLabel={CreateCustomLabel}
        customDropdown={CustomDropdown}
      />
      <Select
        options={users}
        mode='single'
        onChange={handleSelectChange}
        placeholder='Select a person'
        isSearchable={true}
        label='Custom single, searchable'
        customLabel={CreateCustomLabel}
        customDropdown={CustomDropdown}
      />
      <Select
        options={users}
        mode='multiple'
        onChange={handleSelectChange}
        placeholder='Select a person'
        isSearchable={true}
        label='Custom multiple, searchable'
        customLabel={CreateCustomLabel}
        customDropdown={CustomDropdown}
      />
    </div>
  );
};

export default App;
