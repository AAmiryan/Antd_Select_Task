export type SelectMode = 'single' | 'multiple';

export interface Option<T> {
  value: T;
  label: string;
  avatar?: string;
}

export interface ISelectProps<T> {
  options: Option<T>[];
  mode?: SelectMode;
  customLabel?: (option: Option<T>, onRemove: () => void) => React.ReactNode;
  customDropdown?: (
    options: Option<T>[],
    selectedOptions: Option<T>[],
    handleSelect: (option: Option<T>) => void,
  ) => React.ReactNode;
  onChange: (selected: Option<T>[] | Option<T>) => void;
  placeholder?: string;
  isSearchable?: boolean;
  label?: string;
}

export interface IDropdownProps<T> {
  options: Option<T>[];
  selectedOptions: Option<T>[];
  onSelect: (option: Option<T>) => void;
}

export interface IDefaultLabelProps {
  option: Option<string>;
  onRemove: () => void;
  mode: string;
}
