import { TextInput } from '@components/TextInput';

export type SearchItem<T extends object> = {
  id: string;
  item: T;
};

export type SearchProps<T extends object = object> = {
  placeholder?: string;
  value: string;
  items: SearchItem<T>[];
  keysToSearch?: string[];
  onChange?: (newValue: string, items: SearchItem<T>[]) => void;
};

const Search = <T extends object>({
  placeholder = 'Type to search...',
  value,
  items,
  keysToSearch,
  onChange,
}: SearchProps<T>) => {
  const handleChange = (newValue: string) => {
    if (!onChange) return;

    const filteredItems = items.filter((item) => {
      return Object.entries(item.item).some(([key, itemValue]) => {
        return (
          ((keysToSearch && keysToSearch.includes(key)) || !keysToSearch) &&
          !!itemValue &&
          key !== 'id' &&
          typeof itemValue === 'string' &&
          String(itemValue).toLowerCase().includes(newValue.toLowerCase())
        );
      });
    });

    onChange(newValue, filteredItems);
  };

  return (
    <TextInput
      data-testid="search-input"
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Search;
